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

  let arr1 = s1.split('').sort()
  let arr2 = s2.split('').sort()

  let arr = []
  arr1.forEach(item1 => {
    arr2.forEach(item2 => {
      if(item1 === item2) {
        arr.push(item1)
      }
    })
  });

  let uniqArr = arr.filter((item, index) => {
    return index === arr.indexOf(item)
  })
  let arrItems1 = []
  arr1.forEach(item => {
    uniqArr.forEach(el => {
      if(item == el) {
        arrItems1.push(item)
      }
    })
  })
  let arrItems2 = []
  arr2.forEach(item => {
    uniqArr.forEach(el => {
      if(item == el) {
        arrItems2.push(item)
      }
    })
  })

  let arrCount1 = arrItems1.reduce((acc, el) => {
    acc[el] ? acc[el] += 1 : acc[el] = 1
    return acc
  }, {})
  let arrCount2 = arrItems2.reduce((acc, el) => {
    acc[el] ? acc[el] += 1 : acc[el] = 1
    return acc
  }, {})

  let resultArr = []
  for(let key1 in arrCount1) {
    for(key2 in arrCount2) {
      if(key1 == key2) {
        if(arrCount1[key1] <= arrCount2[key2]) {
          resultArr.push(arrCount1[key1])
        } else {
          resultArr.push(arrCount2[key2])
        }
      }
    }
  }
  let result = resultArr.reduce((prev, i) => {
    return prev + i
  },  0)
  return result
}

module.exports = {
  getCommonCharacterCount
};
