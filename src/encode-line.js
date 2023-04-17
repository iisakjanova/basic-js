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
  let encodedStr = '';
  let curChar = '';
  let counter = 0;

  for (let i = 0; i <= str.length; i++) {
    if (i === 0) {
      curChar = str[i];
      counter++
    } else if (str[i] === curChar) {
      counter++;
    } else {
        if(counter > 1) {
          encodedStr = encodedStr + counter.toString() + curChar;
        } else {
          encodedStr = encodedStr + curChar;
        }
      
        curChar = str[i];
        counter = 1;
    } 
  }

  return encodedStr;
}

module.exports = {
  encodeLine
};
