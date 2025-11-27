"use strict";

const data = { x: 10, y: 20, z: 30 };

function iterate(obj, cb) {
  for (const k in obj) {
    cb(k, obj[k]);
  }
  return obj;
}

iterate(data, (key, value) => {
  console.log({ key, value });
});
