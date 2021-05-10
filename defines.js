const config = require('./config.json');
require("ansicolor").nice;

Globals = {
  options: {
    getCoinGeckoPrices: true,
    getStockPricesFromYahoo:true,
    initialCallback: null,  // Function called in the beginning
    updateValuesCallback: null, // Function called at each updated
    cryptosOfInterest : [],
    stocksOfInterest: [],
    updateIntervalInSeconds: config.refreshIntervalInSeconds,
    printIntervalInSeconds: config.refreshIntervalInSeconds,
    alertIntervalInSeconds: config.refreshIntervalInSeconds,
    printStatus: config.shouldPrintStatus,
    sendAlert: config.shouldSendAlert,
    updateStatusBar: false,
    // control
    enable: true // Used for start/stop
  },
  startTime: 0,
  stockPrices: {},
  prices: {}, // Crypto
  globalData: {},
  cryptoPrices: {},
  
  forex: {},
  intervals: {
    printInterval: null,
    coingGeckoUpdateInterval: null,
    statusBarTextInterval: null,
    alertInterval: null
  },
  logOptions: {
    ololog_configure: {
      time: { yes: true, print: x => x.toLocaleString().bright.cyan + " " },
      locate: false,
      tag: true
    },
    initialStatusTextArray: ["Please wait..."],
    minVerbosity: 1, //Minimum verbosity level
    verbosity: 1, //Default verbosity level
    enableStatusBar: true
  },
  priceUpdateTimestamp: 0,
};

var exports = (module.exports = {
  Globals: Globals,
  log: console
});