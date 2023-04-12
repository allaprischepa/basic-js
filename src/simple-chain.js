const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  values: [],
  getLength() {
    return this.values.length;
  },
  addLink(value) {
    this.values.push(`( ${value} )`)

    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.getLength()) {
      this.values = [];
      throw new Error(`You can\'t remove incorrect link!`);
    }

    this.values.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.values = this.values.reverse();

    return this;
  },
  finishChain() {
    let print = this.printChain();
    this.values = [];

    return print;
  },
  printChain() {
    return this.values.join('~~');
  }
};

module.exports = {
  chainMaker
};
