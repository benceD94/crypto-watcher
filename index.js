const stock_crypto_monitor = require("./settup")({
  cryptosOfInterest: ["BTC", "ETH", "LTC"],
  stocksOfInterest: ["AAPL", "GOOGL"]
});
stock_crypto_monitor.start();