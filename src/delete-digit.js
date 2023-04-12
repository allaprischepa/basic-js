const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numberArr = `${n}`.split('');
  let maxNumber = 0;

  numberArr.forEach((value, index) => {
    let tArr = numberArr.slice(0);
    tArr.splice(index, 1);
    let tailNumber = +(tArr.join(''));

    if (tailNumber > maxNumber) {
      maxNumber = tailNumber;
    }
  });

  return maxNumber;

}

module.exports = {
  deleteDigit
};
