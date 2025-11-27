"use strict";

const p = sumNumbers(1, 2, 3);      // 6
const q = sumNumbers(0);             // 0
const r = sumNumbers();              // 0
const s = sumNumbers(1, -1, 1);      // 1
const t = sumNumbers(10, -1, -1, -1); // 7

console.log(p, q, r, s, t);

function sumNumbers(...args) {
  let total = 0;
  let i = 0;
  while (i < args.length) {
    total += args[i];
    i++;
  }
  return total;
}