let now = new Date();
console.log(now);
// let startDate = new Date(0);
// console.log(startDate);
// let startDateAdd24Hours = new Date(24 * 3600 * 1000);
// console.log(startDateAdd24Hours);
// let dateCustom = new Date("2022-08-30");
// console.log(dateCustom);

console.log(now.getMonth());
console.log(now.getDay());

// modulo
let angka = 12;
console.log(angka % 5);
console.log(angka ** 2);
console.log(Math.pow(12, 2));
console.log(1 + 1 + "1" + "1" + 1 + 1); // "21111"

let n = 2;
console.log(n);
n += 5;
console.log(n);
console.log(n + 2);
console.log(n + 3);

// increment & decrement
let counter = 2;
counter++;
console.log(counter);
counter--;
console.log(counter);

let preCounter = 0;
console.log(++preCounter);
let postCounter = 0;
console.log(postCounter++);
