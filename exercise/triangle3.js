let triangle = (n) => {
  let result = "";

  let counter = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (counter <= 9) {
        result += `0${counter} `;
      } else {
        result += `${counter} `;
      }
      counter++;
    }
    result += "\n";
  }

  console.log(result);
};

triangle(4);
