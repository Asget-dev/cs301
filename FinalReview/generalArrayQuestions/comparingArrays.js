/* eslint-disable */

function arrayEquals(array1, array2) {
  if (array1.length !== array2.length) return false;

  let comparator = (a, b) => a - b;
  array1.sort(comparator);
  array2.sort(comparator);

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
let x = [1, 2, 3];
let y = [1, 2, 3];
console.log(arrayEquals(x, y));
