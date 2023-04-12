const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator ? options.separator : '+';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let additionArr = options.addition !== undefined ? new Array(options.additionRepeatTimes).fill(`${options.addition}`) : [];
  let addittionStr = additionArr.join(additionSeparator);
  let resultArr = new Array(options.repeatTimes).fill(`${str}${addittionStr}`);

  return resultArr.join(separator);
}

module.exports = {
  repeater
};
