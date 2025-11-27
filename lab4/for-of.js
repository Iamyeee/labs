"use strict";

const x = total(1, 2, 3);      // 6
const y = total(0);             // 0
const z = total();              // 0
const w = total(1, -1, 1);      // 1
const v = total(10, -1, -1, -1); // 7

console.log(x, y, z, w, v);

function total(...args) {
  let sum = 0;
  for (const n of args) {
    sum += n;
  }
  return sum;
}
