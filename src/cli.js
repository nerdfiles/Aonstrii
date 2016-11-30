/**(
 * @fileOverview ./src/cli.js
 * @description
 * )
 */

let cli = __parser__(function () {/*!
Usage:
  ( node ) aon all
  ( node ) aon get <id>
  ( node ) aon -h | --help
  ( node ) aon --version
*/})

function __parser__ (f) {
  /// @inner

  return f.toString().
    replace(/^[^\/]+\/\*!?/, '').
    replace(/\*\/[^\/]+$/, '');
}

module.exports = cli;


