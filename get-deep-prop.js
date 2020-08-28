/**
* Gets a deeply nested object or array property.
*
* @param {object} obj -- The deeply nested object
* @param {array} path -- The path to the object as an array. Ex: ['topkey', 'nextkey', 0, 'nestedKey']
* @param {any} value -- The new value to set.

* @return {any} -- The value at the specified path.
*/

module.exports = function getDeepProp(obj, path, value) {
  let current = obj

  // Get to the proper key
  for (let i = 0; i < path.length; i++) {
    current = current[path[i]]
  }

  return current
}
