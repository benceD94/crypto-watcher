const config = require('./config.json');

const stock_crypto_monitor = require("./settup")({
  cryptosOfInterest: config.watchers.map(crpyt => crpyt.sign)
});
stock_crypto_monitor.start();