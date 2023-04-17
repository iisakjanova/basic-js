const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let hash = {};
  let newNames= [];

  for (let i = 0; i < names.length; i++) {
    if (hash[names[i]] === undefined) {
      hash[names[i]] = 0;
      newNames.push(names[i]);
    } else {
      if(hash[names[i]] === 0) {
        const newKey = `${names[i]}(1)`;
        hash[newKey] = 0;
      }
      hash[names[i]]++;
      newNames.push(`${names[i]}(${hash[names[i]]})`);
    }
  }

  return newNames;
}

module.exports = {
  renameFiles
};
