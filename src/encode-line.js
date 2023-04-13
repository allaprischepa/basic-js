const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strArr = str.split('');
  let result = '';

  for (let i = 0; i < strArr.length; i++) {
    let count = 1;
    let currentChar = strArr[i];
    while(strArr[i + 1] !== undefined && strArr[i + 1] === currentChar) {
      count++;
      i++;
    }

    result += count === 1 ? currentChar : `${count}${currentChar}`;
  }

  return result;
}

module.exports = {
  encodeLine
};
