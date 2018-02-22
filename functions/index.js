const functions = require('firebase-functions');
const admin = require('firebase-admin');

const cors = require('cors')({origin: true});
const nodemailer = require('nodemailer');
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().mailservice.user,
    pass: functions.config().mailservice.pass
  }
});

admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();

exports.sendEmail = functions.https.onRequest((req, res) => {
  const {email} = req.query;
  const mailOptions = {
    from: 'GFT Supreme Election Tribunal',
    to: email,
    subject: 'Thanks for your vote!',
    text: 'Thank you very much for fulfill your constitutional right.'
  };

  cors(req, res, () => {
    return mailTransport.sendMail(mailOptions)
      .then(() => res.send('Email sent successfully'))
      .catch(err => res.send(err));
  });
});

exports.initializeUser = functions.firestore
  .document('users/{userId}')
  .onCreate(event => {
    return event.data.ref.update({voted: false});
  });

exports.flagUser = functions.firestore
  .document('votes/{voteId}')
  .onCreate(event => {
    const newVote = event.data.data();
    const userFirestoreRef = firestore.doc(`users/${newVote.user}`);

    userFirestoreRef.set({voted: true}, {merge: true});
  });
