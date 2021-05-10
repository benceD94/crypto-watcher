const https = require('https');
const config = require('./config.json');

const Telegram = {
  recipient: null,
    message: null,
    token: null,
    endpoint: 'https://api.telegram.org/bot%token/sendMessage?chat_id=%chatId&text=%message',

    setToken: function (token) {
        this.token = token;
    },

    setRecipient: function (chatId) {
        this.recipient = chatId;
    },

    setMessage: function (message) {
        this.message = message;
    },

    send: function () {
      let endpointUrl = this.endpoint
          .replace('%token', this.token)
          .replace('%chatId', this.recipient)
          .replace('%message', this.message);

      https.get(endpointUrl, (resp) => {
        console.log('Message Sent.')
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
  }
}

function sendMessage(content) {
  Telegram.setToken(config.telegram.token);
  Telegram.setRecipient(config.telegram.recipient);

  content.min.forEach((obj) => {
    Telegram.setMessage(`${obj.symbol} is under your set minimum of ${obj.setPrice} currentyl at: ${obj.price}`);
    Telegram.send();
  })

  content.max.forEach((obj) => {
    Telegram.setMessage(`${obj.symbol} is under your set minimum of ${obj.setPrice} currentyl at: ${obj.price}`);
    Telegram.send();
  })
}

module.exports = function() {
  return {
    sendMessage: sendMessage,
  };
};