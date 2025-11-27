"use strict";

const numbers = [4, 2, 2, 5, 4, 6, 5];

function getUnique(arr) {
  const seen = [];
  for (const item of arr) {
    if (!seen.includes(item)) {
      seen.push(item);
    }
  }
  return seen;
}

console.log(getUnique(numbers));

const moreNumbers = [7, 3, 3, 8, 7, 2, 8];

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

console.log(removeDuplicates(moreNumbers));
