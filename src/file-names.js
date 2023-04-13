const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let uniqueNames = {};
  let resultArr = [];

  names.forEach(name => {
    if (uniqueNames[name] === undefined) {
      resultArr.push(name);
      uniqueNames[name] = 1;
    }
    else {
      let newName = `${name}(${uniqueNames[name]})`;
      resultArr.push(newName);
      uniqueNames[name]++;
      uniqueNames[newName] === undefined ? uniqueNames[newName] = 1 : uniqueNames[newName]++;
    }
  });

  return resultArr;
}

module.exports = {
  renameFiles
};
