function myFunc(arr) {
  return arr.filter((item) => item % 2 == 0);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myFunc(arr)); // [2, 4]

// filter example
let str = [1, 2, 3, 4, 5];
console.log(str.filter((item) => item > 3));
