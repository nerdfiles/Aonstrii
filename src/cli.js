/**(
 * @fileOverview ./src/cli.js
 * @description
 * )
 */

"use strict";

var __parser__ = function (f) {
  /// @inner

  return f.toString().
    replace(/^[^\/]+\/\*!?/, '').
    replace(/\*\/[^\/]+$/, '');
};

var cli = __parser__(function () {/*!
Usage:
  aonstrii search <termType> <termTerm>
  aonstrii sizeup <termType>
  aonstrii -h | --help
  aonstrii --version
*/});


module.exports = cli;


