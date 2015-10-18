var casper = require('casper').create({
  verbose: false,
  pageSettings: {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11"
  }
});

var utils = require('utils');

casper.options.viewportSize = {width: 1535, height: 1617};

casper.start('http://www.skymilesshopping.com/b____.htm');
var list;
casper.waitForSelector(
  '.mn_groupLists'
  ,
  function success() {
    var merchant_selector = '.mn_merchName';
    var rebate_selector = '.mn_rebate';
    var merchant_names = this.getElementsInfo(merchant_selector);
    var rebate = this.getElementsInfo(rebate_selector);
    var output = [];

    for (var i = 0; i < merchant_names.length; i++) {
      output.push({ name: merchant_names[i].text.replace(/\n/g, '').trim(), rebate: rebate[i].text.replace(/\n/g, '').trim() });
    }

    utils.dump(output);
  },
  function fail() {
    console.log('no dice');
});

casper.run(function() { this.exit(); });

