"use strict";

function composeChain(...fns) {
  const run = (val) => {
    try {
      return fns.slice().reverse().reduce((acc, fn) => fn(acc), val);
    } catch (err) {
      return undefined;
    }
  };
  return run;
}

const addOne = x => x + 1;
const double = x => x * 2;
const cube = x => x ** 3;
const broken = x => { throw Error("error"); };

const c1 = composeChain(addOne, double, cube);
const c2 = composeChain(addOne, addOne);
const c3 = composeChain(addOne, broken, cube);

console.log(c1(5));
console.log(c2(7));
console.log(c3(10));