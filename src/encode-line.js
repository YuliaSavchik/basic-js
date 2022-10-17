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
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = str.split('')

  let obj = arr.reduce((acc, el) => {
    acc[el] ? acc[el] += 1 : acc[el] = 1
    return acc
  }, {})

  let newStr = ''
  for(let key in obj) {
    if(obj[key] == 1) {
      newStr += `${key}`
    } else {
      newStr += `${obj[key]}${key}`
    }
  }
  
  return newStr
}

module.exports = {
  encodeLine
};
