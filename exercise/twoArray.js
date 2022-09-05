function myFunc(a, b) {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    res[i] = a[i] + b[i];
  }

  return res;
}

let arr1 = [1, 5, 3];
let arr2 = [1, 2, 6];

console.log(myFunc(arr1, arr2)); // [2,4,6]
