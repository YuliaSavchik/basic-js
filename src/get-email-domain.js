const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {

  let arr = email.split('')

  let dogIndex = []

  arr.forEach((item, index) => {
    if(item === '@') {
      dogIndex.push(index)
    }
  });

  let curIn = dogIndex[dogIndex.length - 1] + 1
  let lastIn = arr.length
  
  let result = email.slice(curIn, lastIn)

  return result
}

module.exports = {
  getEmailDomain
};
