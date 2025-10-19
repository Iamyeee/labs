const carsArray = [
  "Tesla",
  2022,
  true,
  "BMW",
  1999,
  false,
  "Audi",
  2015,
  "Mercedes",
  "true",
  777,
  "Lamborghini",
  0,
  "Ford",
];

const typesCount = { number: 0, string: 0, boolean: 0 };

function countTypes(arr) {
  for (const item of arr) {
    const type = typeof item;
    if (type in typesCount) {
      typesCount[type]++;
    }
  }
}

countTypes(carsArray);
console.dir(typesCount);
