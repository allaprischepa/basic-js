const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(value) {
    this.direct = value;
  }
  encrypt(str, key) {
    this.checkParams(str, key);

    str = str.toUpperCase();
    key = key.toUpperCase();
    let alphabet = this.getAlphabet();
    let indexOfKeyCharInKey = 0;
    let encryptedStr = '';

    for (let i = 0; i < str.length; i++) {
      indexOfKeyCharInKey = indexOfKeyCharInKey % key.length;
      let indexOfCharInAlphabet = alphabet.indexOf(str[i]);
      let indexOfKeyCharInAlphabet = alphabet.indexOf(key[indexOfKeyCharInKey]);

      // Check if it's a letter.
      if (indexOfCharInAlphabet >= 0) {
        let indexOfEncryptedChar = (indexOfCharInAlphabet + indexOfKeyCharInAlphabet) % alphabet.length;
        encryptedStr += alphabet[indexOfEncryptedChar];

        indexOfKeyCharInKey++;
      }
      else {
        encryptedStr += str[i];
      }
    }

    return this.direct === false ? encryptedStr.split('').reverse().join('') : encryptedStr;
  }
  decrypt(encryptedStr, key) {
    this.checkParams(encryptedStr, key);

    encryptedStr = encryptedStr.toUpperCase();
    key = key.toUpperCase();
    let alphabet = this.getAlphabet();
    let indexOfKeyCharInKey = 0;
    let decryptedStr = '';

    for (let i = 0; i < encryptedStr.length; i++) {
      indexOfKeyCharInKey = indexOfKeyCharInKey % key.length;
      let indexOfCharInAlphabet = alphabet.indexOf(encryptedStr[i]);
      let indexOfKeyCharInAlphabet = alphabet.indexOf(key[indexOfKeyCharInKey]);

      if (indexOfCharInAlphabet >= 0) {
        let indexOfDecryptedChar = (alphabet.length + (indexOfCharInAlphabet - indexOfKeyCharInAlphabet)) % alphabet.length;
        decryptedStr += alphabet[indexOfDecryptedChar];

        indexOfKeyCharInKey++;
      }
      else {
        decryptedStr += encryptedStr[i];
      }

    }

    return this.direct === false ? decryptedStr.split('').reverse().join('') : decryptedStr;
  }
  getAlphabet() {
    return 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  }
  checkParams(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
