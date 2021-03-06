// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sip
  .credentialLists('CL32a3c49700934481addd5ce1659f04d2')
  .credentials('SC32a3c49700934481addd5ce1659f04d2')
  .delete((err, data) => {
    if (err) {
      console.log(err.status);
      throw err.message;
    } else {
      console.log(
        'Sid SC32a3c49700934481addd5ce1659f04d2 deleted successfully.'
      );
    }
  });
