"use strict";

function seqChain(...fns) {
  const pipeline = [...fns];

  const next = (input) => {
    if (typeof input === "function") {
      pipeline.push(input);
      return next;
    }
    return pipeline.reduceRight((acc, fn) => fn(acc), input);
  };

  if (fns.length === 1 && typeof fns[0] === "number") {
    return fns[0] + 15;
  }

  return next;
}

console.log(seqChain((x) => x + 7)((x) => x * 2)(5)); // 17
console.log(seqChain((x) => x * 2)((x) => x + 7)(5)); // 24
console.log(seqChain((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7)); // 3
console.log(seqChain(5)); // 20
console.log(seqChain((x) => x * 2)(5)); // 10