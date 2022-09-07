// function myFunc(obj1, obj2) {
//   // write code here
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

// let user1 = {
//   name: "nana",
//   age: 9,
// };

// let user2 = {
//   age: 9,
//   name: "nana",
// };

// console.log(myFunc(user1, user2));

function myFunc(obj1, obj2) {
  //   cara 1
  let kata1 = Object.keys(obj1); // ["name", "age"]
  let kata2 = Object.keys(obj2);

  if (kata1.length !== kata2.length) {
    return "salah mamang";
  }
  for (let key of kata1) {
    if (obj1[key] !== obj2[key]) {
      return "salah mamang";
    }
  }
  return "Bener mamang";
}

let obj1 = {
  name: "Batagor",
  age: 9,
};

let obj2 = {
  age: 9,
  name: "Batagor",
};

console.log(myFunc(obj1, obj2));
