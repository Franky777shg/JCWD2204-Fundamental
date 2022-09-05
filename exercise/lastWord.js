function myFunc(arr) {
  // wirte code here
  let lastWord = arr[arr.length - 1];
  arr.pop();

  return `${arr.join(", ")} and ${lastWord}`;
}

let arr = ["apple", "banana", "kiwi", "melon"];
console.log(myFunc(arr));
