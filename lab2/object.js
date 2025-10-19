'use strict';

const fn = () => {
  const obj1 = { name: "Igor" };
  let obj2 = { name: "Elena" };

  obj1.name = "Lena";
  obj2.name = "Maks";

  obj2.name = { name: "Petrov" };
  console.dir({ obj1, obj2 });
};
fn();
// змінює name всередині об'єктів, але об’єкт2 переназначається повністю

function createUser(name, city) {
  return { name, city };
}

console.log(createUser("Yegor", "Kyiv"));
