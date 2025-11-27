"use strict";

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < types.length - 1; i++) {
    const expectedType = types[i].name.toLowerCase();
    if (typeof args[i] !== expectedType) {
      throw new TypeError(`Argument ${i} must be ${expectedType}`);
    }
  }

  const result = fn(...args);

  const returnType = types[types.length - 1].name.toLowerCase();
  if (typeof result !== returnType) {
    throw new TypeError(`Return value must be ${returnType}`);
  }

  return result;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3)); // 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings("Hello ", "world!")); // Hello world!