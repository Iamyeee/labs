'use strict';

function average(a, b) {
  return (a + b) / 2;
}
console.log(average(30, 90));

function square(num) {
  return num * num;
}
console.log(square(5));

function cube(num) {
  return num * num * num;
}
console.log(cube(3));

function calculateRange(start, end) {
  const results = [];
  for (let n = start; n <= end; n++) {
    const sq = square(n);
    const cb = cube(n);
    results.push(average(sq, cb));
  }
  return results;
}

console.log(calculateRange(1, 5));