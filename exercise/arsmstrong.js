let number = 154;
let count = 0;
let a = number.toString();

for (let i = 0; i < a.length; i++) {
  count += a[i] ** a.length;
}

console.log(count);
if (count === number) {
  console.log("armstrong");
} else {
  console.log("not armstrong");
}
