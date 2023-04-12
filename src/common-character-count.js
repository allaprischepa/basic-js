const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');
  let intersection = s1Arr.filter(ch1 => {
    let s2CharIndex = s2Arr.indexOf(ch1);

    if (s2CharIndex >= 0) {
      s2Arr.splice(s2CharIndex, 1);

      return true;
    }

    return false;
  });

  return intersection.length;
}

module.exports = {
  getCommonCharacterCount
};
