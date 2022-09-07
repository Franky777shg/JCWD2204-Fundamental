function myfunc(arr) {
  // write code here
  let res = [];

  arr.forEach((item) => {
    let temp = {};

    // console.log(item);
    for (let key in item) {
      temp[item[key]] = key;
    }
    // console.log(temp);
    res.push(temp);
  });

  return res;
}

let list = [
  {
    name: "David",
    age: 20,
  },
  {
    name: "Cooper",
    age: 18,
  },
];

console.log(myfunc(list));
