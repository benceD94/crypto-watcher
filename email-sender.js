const config = require('./config.json');
const sendmail = require('sendmail')();
const isSameDay = require('date-fns/isSameDay')

let lastEmailSent = null;

function callSendMail(content) {
  sendmail({
      from: config.email.from,
      to: config.email.to,
      subject: config.email.subject,
      html: `<html>
        <body>
          <table>
            <tbody>
              ${content}
            </tbody>
          </table>
        </body>
      </html>`,
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
  });
}

function checkEmailSpam(content) {
  if (!lastEmailSent) {
    callSendMail(content);
    lastEmailSent = new Date();
  } else {
    if(!isSameDay(lastEmailSent, new Date())) {
      callSendMail(content);
      lastEmailSent = new Date();
    }
  }
}

function send(content) {
  if (config.email.dailyAlert) {
    checkEmailSpam(content)
  } else {
    callSendMail(content)
  }
}

module.exports = function() {
  return {
    send: send,
  };
};