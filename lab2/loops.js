'use strict';

let numbers = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

console.log(numbers(10, 25));

let oddNumbers = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
};

console.log(oddNumbers(10, 25));
