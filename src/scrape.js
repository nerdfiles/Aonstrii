/**(
 * @fileOverview ./src/scrape.js
 * )
 */

"use strict";

const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
const fs = require('fs');
const pry = require('pryjs');
const domain = 'duckduckgo';
const tld = 'com';
const protocol = 'https';
const sepPath = '://';
const sepExt = '.';
const entryPoint = '/html/';
const R = require('ramda');
const _ = require('lodash');
const colors = require('colors');

Nightmare.action('size', function (done) {

  this.evaluate_now(function () {

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    return {
      height : h,
      width  : w
    };

  }, done);

});

//eval(pry.it);

const selector = 'a';
const baseUrl = protocol + sepPath + domain + sepExt + tld + entryPoint;


var Scrape = (function () {

  /** @inner
    * @description
    *
    */
  var __ddg__ = function (term) {

    nightmare
      .goto(baseUrl)
      .type('form[action*="/html/"] [name=q]', term)
      .click('form[action*="/html/"] [type=submit]')
      .wait('.result__a')
      .screenshot('./test.ddg.png')
      .evaluate(function (selector) {
        var selectedElements = document.querySelectorAll(selector);
        return Array.prototype.map.call(selectedElements, function (elem) {
          return elem.text;
        });
      }, '.result__a')
      .then((href) => {
        //console.log(JSON.stringify(href));

        var nullList = R.takeWhile(R.isEmpty, href);
        //console.log(nullList);

        var composedAnchorsList = R.filter(
          R.compose(
            R.flip(R.contains)(['html', 'jquery']),
            R.prop('text')
          ), href);
        //console.log(composedAnchorsList);

        var filteredAnchorsList = R.filter(href);

        var hrefMap = href.map(function (p) {
          return p;
        });

        fs.writeFile("./href.map", hrefMap, function (err) {
          if (err) {
            return console.log(err);
          }

          console.log("Scrape complete!".rainbow);
        });

        return nightmare.end();
      })
      .then();

    /*
     *nightmare
     *  .goto(baseUrl)
     *  .type('form[action*="/html/"] [name=q]', term)
     *  .click('form[action*="/html/"] [type=submit]')
     *  .wait('.result__a')
     *  .size()
     *  .then(function (sized) {
     *     console.log(sized);
     *  });
     */

  };

  /** @inner
    * @description
    *
    */
  var __yahoo__ = function (term) {

    nightmare
      .goto('https://search.yahoo.com')
      .type('form[action*="/search"] [name=p]', term)
      .click('form[action*="/search"] [type=submit]')
      .wait('#main')
      .screenshot('./test.yahoo.png')
      .evaluate(function (selector) {
        return document.querySelector(selector)
          .href;
      }, selector)
      .then((href) => {
        return nightmare.end();
      })
      .then();

  };

  var scraperInterface = {
    ddg   : __ddg__,
    yahoo : __yahoo__
  };

  return scraperInterface;

})();


module.exports = Scrape;


