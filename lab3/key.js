const createKey = (len, chars) => {
  let k = "";
  for (let i = 0; i < len; i++) {
    k += chars[Math.floor(Math.random() * chars.length)];
  }
  return k;
};

const chars = "abcdef1234567890xyzuvw";
console.log(createKey(12, chars));
console.log(createKey(20, chars));
console.log(createKey(8, chars));
