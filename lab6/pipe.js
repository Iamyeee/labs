"use strict";

const simplePipe = (...funcs) => {
  for (const f of funcs) {
    if (typeof f !== "function") throw new Error("Аргумент не функція");
  }
  return (val) => funcs.reduce((acc, fn) => fn(acc), val);
};

const addOne = x => x + 1;
const double = x => x * 2;
const cube = x => x ** 3;

const p1 = simplePipe(addOne, double, cube);
const p2 = simplePipe(addOne, addOne);

console.log(p1(5));
console.log(p2(7));

try {
  const p3 = simplePipe(addOne, 7, cube);
  console.log(p3(10));
} catch (err) {
  console.log(err.toString());
  }