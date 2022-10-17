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
  //throw new NotImplementedError('Not implemented');
  if(Array.isArray(arr)) {
    let array = []
    arr.forEach(i => { array.push(i) })

    let index = []
    array.forEach((item, i) => {
      if(item === '--double-prev' ||
        item === '--discard-prev' ||
        item === "--double-next" ||
        item === "--discard-next") index.push(i)
    })

    if(index.length === 1) {
      let teg = array[index[0]]
      let tegIndex = index[0]
      let lastIndex = array.length - 1
      
      if(teg === '--double-prev' && tegIndex === 0 || teg === '--discard-prev' && tegIndex === 0) {
        array.shift()
      }
      else if(teg === "--double-next" && tegIndex === lastIndex || teg === "--discard-next" && tegIndex === lastIndex) {
        array.pop()
      }
      else if(tegIndex < lastIndex && teg === '--double-next') {
        let item = array[tegIndex + 1]
        array.splice(tegIndex + 1, 0, item)
        array.splice(tegIndex, 1)
      }
      else if(tegIndex > 0 && teg === '--double-prev') {
        let item = array[tegIndex - 1]
        array.splice(tegIndex - 1, 0, item)
        array.splice(tegIndex + 1, 1)
      }
      else if(tegIndex < lastIndex && teg === '--discard-next') {
        array.splice(tegIndex, 2)
      }
      else if(tegIndex > 0 && teg === '--discard-prev') {
        array.splice(tegIndex - 1, 2)
      }
    }
    else if(index.length > 1) {
      let teg1 = array[index[0]]
      let teg1Ind = index[0]
      let teg2 = array[index[1]]
      let teg2Ind = index[1]

      if(teg1 === '--discard-next' && teg2 === '--double-prev' ||
          teg1 === '--discard-next' && teg2 === '--discard-prev') {
        array.splice(teg1Ind, 3)
      }
      else if(teg1 === '--double-next' && teg2 === '--double-prev') {
        let item = array[teg1Ind + 1]
        array.splice(teg1Ind + 1, 0, item, item)
        array.splice(teg1Ind + 4, 1)
        array.splice(teg1Ind, 1)
      }
      else if(teg1 === '--double-next' && teg2 === '--discard-prev') {
        array.splice(teg2Ind, 1)
        array.splice(teg1Ind, 1)
      }
    }

    return array
  }
  throw new Error(`'arr' parameter must be an instance of the Array!`)
}

module.exports = {
  transform
};
