let number = 7;
let factor = 0;

for (let i = 1; i <= number; i++) {
  if (number % i === 0) factor++;
}

if (factor === 2) {
  console.log("prime");
} else {
  console.log("not prime");
}

// ternary
// console.log(factor === 2 ? "prime" : "not prime");
