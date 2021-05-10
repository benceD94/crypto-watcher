const isSameDay = require('date-fns/isSameDay')
const telegramMessager = require('./telegram');
const emailSender = require('./email-sender');
const config = require('./config.json');

let lastEmailSent = null;

function checkEmailSpam(content) {
  if (!lastEmailSent) {
    telegramMessager().sendMessage(content);
    // emailSender.send(content);
    lastEmailSent = new Date();
  } else {
    if(!isSameDay(lastEmailSent, new Date())) {
      telegramMessager().sendMessage(content);
      // emailSender.send(content);
      lastEmailSent = new Date();
    }
  }
}

function sendAlert(content) {
  if (config.email.dailyAlert) {
    checkEmailSpam(content)
  } else {
    telegramMessager().sendMessage(content);
    // emailSender.send(content)
  }
}

module.exports = function() {
  return {
    sendAlert: sendAlert,
  };
};