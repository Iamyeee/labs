"use strict";

let nums = [1, 2, 3, 4, 5, 6, 7];

function removeOne(arr, value) {
  const index = arr.indexOf(value);
  if (index !== -1) arr.splice(index, 1);
  return arr;
}

removeOne(nums, 50);
console.log(nums);

let cities = ["Tokyo", "Paris", "Sydney", "Toronto"];

function removeMany(arr, ...values) {
  for (const val of values) {
    removeOne(arr, val);
  }
  return arr;
}

removeMany(cities, "Sydney", "Berlin", "Tokyo");
console.log(cities);

let moreCities = ["Madrid", "Rome", "Oslo", "Copenhagen", "Lisbon", "Helsinki", "Warsaw"];

const filterRemove = (arr, items) => arr.filter(e => ![].concat(items).includes(e));

moreCities = filterRemove(moreCities, ["Oslo", "Copenhagen", "Lisbon"]);
moreCities = filterRemove(moreCities, "Paris");

console.log(moreCities);
