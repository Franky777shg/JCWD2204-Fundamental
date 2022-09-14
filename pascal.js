const pascal = (n) => {
  let res = [[1], [1, 1]]; // [1,2,1]

  for (let i = 2; i < n; i++) {
    let temp = [1]; // [1,2,1]
    let previous = [...res[i - 1]]; // [1,1]

    previous.forEach((item, index) => {
      if (previous[index + 1]) {
        temp.push(item + previous[index + 1]);
      }
    });

    temp.push(1);
    res.push(temp);
  }

  return res;
};

console.log(pascal(6));
