const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let resultArr = [];
  let discarded = [];

  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        //excludes the next element of the array from the transformed array.
        discarded.push(i+1);
        i++;
        break;
      case '--discard-prev':
        //excludes the previous element of the array from the transformed array.
        if (!discarded.includes(i-1)) {
          resultArr.splice(i-1, 1);
        }
        break;
      case '--double-next':
        //duplicates the next element of the array in the transformed array.
        if (arr[i+1]) {
          resultArr.push(arr[i+1]);
          resultArr.push(arr[i+1]);
          i++;
        }
        break;
      case '--double-prev':
        //duplicates the previous element of the array in the transformed array.
        if (arr[i-1] && !discarded.includes(i-1)) {
          resultArr.push(arr[i-1]);
        }
        break;
      default:
        resultArr.push(arr[i]);
    }
  }

  return resultArr;
}

module.exports = {
  transform
};
