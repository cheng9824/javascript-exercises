const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  const result = arr.reduce((total, item) => {
    return total + item;
  }, 0);

  return result;
};

const multiply = function (arr) {
  const result = arr.reduce((total, item) => {
    return total * item;
  }, 1)

  return result;
};

const power = function (a, b) {
  let result = 1;

  for (let i = 0; i < b; i++) {
    result *= a;
  }

  return result;
};

const factorial = function (num) {
  let result = 1;

  if (num === 0) {
    return 1;
  }

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
