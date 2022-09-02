// function declaration
function sum(number1, number2) {
  return number1 + number2;
}

let result = sum(2, 3);
console.log(result);

function greet() {
  console.log("Hello!");
}
greet();

// function expression
let substraction = function (number1, number2) {
  return number1 - number2;
};
console.log(substraction(5, 3));

// using arrow function
let division = (number1, number2) => {
  return (number1 / number2) * 10;
};
console.log(division(6, 3));

// function scope
function greeting() {
  const word = "Hello!";
  console.log(word);
}

// error karena variabel word ada di dalam scope function greeting
// console.log(word);

// default function
function sum2(a, b = 1) {
  return a + b;
}

console.log(sum2(3));

// Rest Parameter
function listNumber(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
}
listNumber(1, 2, 3, 4, 5, 6, 7);

// Nested Function
function getMessage(firstName) {
  return function sayHello() {
    return "Hello " + firstName + ".";
  };
}

let a = getMessage("Bob");
console.log(a());

// Closure Function
let nama = "Jaja";
function salam1() {
  //   let nama = "Budi";

  return function salam2() {
    console.log(`Hello ${nama}!`);
  };
}

salam1()();

// currying
function preCurrying(number1, number2) {
  return number1 * number2;
}
console.log(preCurrying(2, 3));
console.log(preCurrying(2, 8));

function postCurrying(number1) {
  return function func2(number2) {
    return number1 * number2;
  };
}
console.log(postCurrying(2)(3));
console.log(postCurrying(2)(8));

// recursive function
function countdown(n) {
  console.log(n);
  if (n > 1) {
    countdown(n - 1);
  }
}
countdown(3);
