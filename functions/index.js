const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.email = functions.https.onRequest(require('./services/email'));
