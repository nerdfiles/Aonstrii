var nightmare = require('nightmare')();
var selector = 'a';

nightmare
  .goto('http://yahoo.com')
  .type('form[action*="/search"] [name=p]', 'github nightmare')
  .click('form[action*="/search"] [type=submit]')
  .wait('#main')
  .evaluate(function(selector) {
    return document
      .querySelector(selector)
      .href;
  }, selector)
  .then((href) => {
    console.log('__prying__');
    eval(pry.it);
    console.log(href);
    return nightmare.end();
  })
  .then();
