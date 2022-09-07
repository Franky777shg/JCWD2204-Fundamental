function myfunc(obj1, obj2) {
  // write code here
  let res = {};

  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      res[key] = obj1[key];
    }
  }

  return res;
}

let user1 = {
  a: 1,
  b: 2,
};
let user2 = {
  a: 1,
  c: 2,
  home: "jakarta",
};

console.log(myfunc(user1, user2));
// { a: 1 }
