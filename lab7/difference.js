"use strict";

const first = ["Tokyo", "Madrid", "Oslo"];
const second = ["Oslo", "Paris", "London"];
const diff1 = difference(first, second);

function difference(arr1, arr2) {
  const result = [];
  for (const el of arr1) {
    if (!arr2.includes(el)) result.push(el);
  }
  return result;
}

console.log(diff1);

const listA = ["Rome", "Berlin", "Vienna", "Lisbon"];
const listB = ["Berlin", "Madrid", "Lisbon"];
const diff2 = listA.filter(el => !listB.includes(el));

console.log(diff2);
