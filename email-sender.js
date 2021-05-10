const config = require('./config.json');
const sendmail = require('sendmail')();

function send(content) {
  const generatedContent = ''

  content.min.forEach((obj) => {
    generatedContent =+ `<tr><td><b>${obj.symbol}</b> is under your set minimum of ${obj.setPrice} currentyl at: <b>${obj.price}</b></tr>`;
  })

  content.max.forEach((obj) => {
    generatedContent =+ `<tr><td><b>${obj.symbol}</b> is under your set minimum of ${obj.setPrice} currentyl at: <b>${obj.price}</b></tr>`;
  })

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

module.exports = function() {
  return {
    send: send,
  };
};