let triangle = (n) => {
  let result = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (j <= 9) {
        result += `0${j} `;
      } else {
        result += `${j} `;
      }
    }
    result += "\n";
  }

  console.log(result);
};

triangle(10);
