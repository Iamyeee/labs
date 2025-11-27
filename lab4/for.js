"use strict";

const num1 = sumNumbers(1, 2, 3);      // 6
const num2 = sumNumbers(0);             // 0
const num3 = sumNumbers();              // 0
const num4 = sumNumbers(1, -1, 1);      // 1
const num5 = sumNumbers(10, -1, -1, -1); // 7

console.log(num1, num2, num3, num4, num5);

function sumNumbers(...values) {
  let total = 0;
  for (const val of values) {
    total += val;
  }
  return total;
}