function myFunc(item) {
  // write code here
  let arr = [1, 2, 3];
  let index = arr.indexOf(item);
  console.log(index);
  if (index === -1) {
    arr.push(item);
  }
  return arr;
}

console.log(myFunc(1));
