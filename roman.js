const roman = (str) => {
  let romanCharacters = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let res = 0; // 1994

  for (let i = 0; i < str.length; i++) {
    // 1
    let current = str[i];
    let next = str[i + 1];

    if (romanCharacters[current] < romanCharacters[next]) {
      res -= romanCharacters[current];
    } else {
      res += romanCharacters[current];
    }
  }

  return res;
};

console.log(roman("MCMXCIV"));
