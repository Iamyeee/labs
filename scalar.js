function addValue(num) {
  return num + 25;
}

const original = 7;
const result = addValue(original);
console.log({ original, result });

function increaseProperty(obj) {
  obj.score += 15;
  console.log(obj);
}

const player = {
  score: 30,
  level: 1200,
};

increaseProperty(player);
