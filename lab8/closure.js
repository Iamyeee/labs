"use strict";

function store(val) {
  return () => val;
}

const read = store(10);
const value = read();
console.log(value);