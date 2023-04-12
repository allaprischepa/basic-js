const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    members = members.filter(el => typeof el === 'string'); // Get strings only.
    let abbrs = members.map(el => el.trim()[0].toUpperCase()); // Transform to upper case.
    abbrs = abbrs.sort(); // Sort alphabetically.

    return abbrs.join('');
  }

  return false;
}

module.exports = {
  createDreamTeam
};
