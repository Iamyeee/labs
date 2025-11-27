"use strict";

const m = sumNums(1, 2, 3);       // 6
const n = sumNums(0);              // 0
const o = sumNums();               // 0
const p = sumNums(1, -1, 1);       // 1
const q = sumNums(10, -1, -1, -1); // 7

console.log(m, n, o, p, q);

function sumNums(...args) {
  let total = 0;
  if (args.length === 0) return 0;
  
  let i = 0;
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  
  return total;
}