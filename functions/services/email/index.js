const { logger, config } = require('firebase-functions');
const { vow } = require('batboy.mente');
const mailgun = require('mailgun.js');
const client = mailgun.client({
    username: 'api',
    key: config().email.key,
    public_key: config().email.pubkey
});

async function email (req, res) {
    if (req.method.toUpperCase() != 'POST') return res.sendStatus(404);
    var { name, email, phone, message } = JSON.parse(req.body);
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
    var [success, error] = await vow(client.messages.create(config().email.domain, options))

    if (success) logger.log(success)
    if (error) logger.error(error)

    res.send({ success: true })
}

module.exports = email;
