const { logger, config } = require('firebase-functions');
const { vow } = require('batboy.mente');
const mailgun = require('mailgun.js');
const Busboy = require('busboy');
const os = require('os');
const fs = require('fs');
const path = require('path');
const client = mailgun.client({
    username: 'api',
    key: config().email.key,
    public_key: config().email.pubkey
});

async function email (req, res) {
    if (req.method.toUpperCase() != 'POST') return res.sendStatus(404);

    const busboy = new Busboy({ headers: req.headers });
    let formData = {
        fields: {},
        files: {},
        writes: [],
        res,
        req
    }

    busboy.on('field', saveField.bind(formData));
    busboy.on('file', saveFile.bind(formData));
    busboy.on('finish', finishProcess.bind(formData));
    busboy.end(req.rawBody);
}

async function sendEmail(data) {
    console.log('DAMN');
    var { name, email, phone, message } = data.fields;
    var attachment = Object.values(data.files).length > 0 ? fs.createReadStream(Object.values(data.files)[0]) : null;
    var text = `
        Name: ${name}
        Email: ${email}
        Phone Number: ${phone}

        ${message}


    `;
    var options = {
        from: `${name} <${email}>`,
        to: config().email.dest,
        subject: 'Message from Culinary Conservatory',
        text
    };

    if (attachment) options.attachment = [attachment];

    var [success, error] = await vow(client.messages.create(config().email.domain, options))

    if (success) logger.log(success)
    if (error) logger.error(error)

    data.res.send({ success: true });
}

function saveField(name, val) {
    console.log(`Processing ${name}: ${val}`);
    this.fields[name] = val;
}

function saveFile(field, file, name) {
    console.log(`Processing File ${name}`);
    const tempPath = path.join(os.tmpdir(), name);
    const stream = fs.createWriteStream(tempPath);

    this.files[name] = tempPath;
    file.pipe(stream);

    const promise = new Promise((resolve, reject) => {
        file.on('end', () => stream.end());
        stream.on('finish', resolve);
        stream.on('error', reject);
    });

    this.writes.push(promise);
}

async function finishProcess() {
    await Promise.all(this.writes);
    await sendEmail(this);
}

module.exports = email;
