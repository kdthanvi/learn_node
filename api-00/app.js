//app.js
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
var request = require("request");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/invite', (req, res) => {

  if (!req.body.email) {
    res.send({ 'Error': 'No email, No invite!' });
  }
  else {
    function doInvite() {
      request.post({
        url: 'https://' + config.slack_ws + '.slack.com/api/users.admin.invite',
        form: {
          email: req.body.email,
          token: config.slack_token,
          set_active: true
        }
      }, function (err, httpResponse, body) {
        if (err) {
          console.log('error res from slack-api');
          return res.send({ 'Error': err });
        }
        body = JSON.parse(body);
        if (body.ok) {    //return true if invited successfully
          res.send({ 'Success': 'invitation sent!' });
          console.log('success. invited. response sent!');
          return;
        } else {          //return false otherwise
          let error = body.error;
          if (error === 'already_invited' || error === 'already_in_team') {
            res.send({ 'Err': 'already invited' });
            console.log('err. alerday-there. response sent!');
          }
          else if (error === 'invalid_email') {
            res.send({ 'Err': 'invalid email' });
            console.log('err. invalid-email. response sent!');
          }
          else if (error === 'invalid_auth') {
            res.send({ 'Argh': 'invalid auth, contact admin' });
            console.log('argh. response sent!');
          }
        }
      });
    }
    doInvite();
  }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

