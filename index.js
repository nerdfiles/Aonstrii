/**(
 * @fileOverview ./index.js
 * )
 */

"use strict";

var scrape = require('./src/scrape');
var cli = require('./src/cli');
var docopt = require('docopt-js');


function __cli__ (config) {
  //console.log(config);

  if (config['sizeup']) {
    return scrape.sizeup();
  }

  if (config['<termTerm>'] && config['<termType>'] === 'ddg') {
    scrape.ddg(config['<termTerm>']);
  } else if (config['<termTerm>'] && config['<termType>'] === 'yahoo') {
    scrape.yahoo(config['<termTerm>']);
  } else {
    console.log('No search type or term provided.');
  }
}

var initConfig = docopt.docopt(cli, { version: '0.0.1' })


module.exports = __cli__(initConfig);

