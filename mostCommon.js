let mostCommon = (str) => {
  str.toLowerCase();
  let res;
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    // k, e, r, e, t, a
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      // k e r e t a
      if (str[i] === str[j]) count++;
    }
    if (count > total) {
      res = str[i];
      total = count;
    }
  }

  return res;
};

console.log(mostCommon("b c d"));
