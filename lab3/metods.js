const iface = {
  sum: (a, b) => a + b,
  multiply(x, y, z) {
    return x * y * z;
  },
  greet(name) {
    return `Hello, ${name}!`;
  },
};

const listMethods = (obj) => {
  const methodsInfo = [];
  for (const key in obj) {
    if (typeof obj[key] === "function") {
      methodsInfo.push([key, obj[key].length]);
    }
  }
  return methodsInfo;
};

console.table(listMethods(iface));
