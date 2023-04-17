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
  if(arr instanceof Array === false) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const transformedArr = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current === "--discard-next") {
      i++;
    } else if (current === "--discard-prev") {
      if (i > 0 && arr[i - 2] !== "--discard-next") {
        transformedArr.pop();
      }
    } else if (current === "--double-next") {
      if (i < arr.length - 1) {
        transformedArr.push(arr[i + 1]);
      }
    } else if (current === "--double-prev") {
      if (i > 0 && arr[i - 2] !== "--discard-next") {
        transformedArr.push(arr[i - 1]);
      }
    } else {
      transformedArr.push(current);
    }
  }

  return transformedArr;
}

module.exports = {
  transform
};
