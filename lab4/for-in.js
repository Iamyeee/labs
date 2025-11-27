"use strict";

const figures = {
  einstein: { born: 1879, died: 1955 },
  tesla: { born: 1856, died: 1943 },
  curie: { born: 1867, died: 1934 },
  napoleon: { born: 1769, died: 1821 },
  lincoln: { born: 1809, died: 1865 },
  cleopatra: { born: -69, died: -30 },
};

console.log(computeAges(figures));

function computeAges(data) {
  for (const key in data) {
    data[key].lived = data[key].died - data[key].born;
  }
  return data;
}
