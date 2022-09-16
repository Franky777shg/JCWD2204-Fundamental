const sum = () => {
  return 5 + 5;
};

const substraction = () => {
  return 5 - 1;
};

const looping = (n) => {
  let counter = 0;
  for (let i = 0; i < n; i++) {
    counter += i;
  }

  return counter;
};

module.exports = {
  sum,
  looping,
};
