const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let allDNS = {};

  domains.forEach(domain => {
    let subDomains = domain.split('.').reverse();
    let prevSubDomain = '';
    for (let i = 0; i < subDomains.length; i++) {
      prevSubDomain = i === 0 ? subDomains[i] : `${prevSubDomain}.${subDomains[i]}`;
      allDNS[`.${prevSubDomain}`] === undefined ? allDNS[`.${prevSubDomain}`] = 1 : allDNS[`.${prevSubDomain}`]++;
    }
  });

  return allDNS;
}

module.exports = {
  getDNSStats
};
