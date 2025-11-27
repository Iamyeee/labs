"use strict";

const x = sumAll(1, 2, 3);        // 6
const y = sumAll(0);               // 0
const z = sumAll();                // 0
const w = sumAll(1, -1, 1);       // 1
const v = sumAll(10, -1, -1, -1); // 7

console.log(x, y, z, w, v);

function sumAll(...args) {
  return args.reduce((total, num) => total + num, 0);
}