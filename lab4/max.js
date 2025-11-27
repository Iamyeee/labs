"use strict";

const result = maxValue([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

console.log(result); // 9

function maxValue(matrix) {
  let maxNum = matrix[0][0];
  for (const row of matrix) {
    for (const val of row) {
      if (val > maxNum) {
        maxNum = val;
      }
    }
  }
  return maxNum;
}