function myFunc(n) {
  let res = [0, 1];

  for (let i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }

  return res.join(", ");
}

console.log(myFunc(10)); // 0,1,1,2,3,5,8
