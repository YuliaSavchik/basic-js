const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if(typeof position === 'number') {
      if(position < 1 || position > this.getLength()) {
        this.chain.length = 0
        throw new Error(`You can't remove incorrect link!`)
      }
      let index = position - 1
      this.chain.splice(index, 1)
      return this
    }
    this.chain.length = 0
    throw new Error(`You can't remove incorrect link!`)
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let chainFinish = this.chain.join('~~')
    this.chain.length = 0
    return chainFinish
  },
  
};

module.exports = {
  chainMaker
};
