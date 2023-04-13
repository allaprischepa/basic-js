const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let matrixCopy = matrix.map((arr) => arr.slice(0));

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      let count = 0;

      for (let i = row - 1; i <= row + 1; i++) {
        if (matrix[i] === undefined) continue;

        for (let j = column - 1; j <= column + 1; j++) {
          if (matrix[i][j] === undefined || (i === row && j === column)) continue;

          if (matrix[i][j] === true) count++;
        }
      }

      matrixCopy[row][column] = count;
    }
  }

  return matrixCopy;
}

module.exports = {
  minesweeper
};
