// syntax
let car = {
  brand: "BMW",
  price: 80000000,
};

let car2 = new Object();
// console.log(car2);

// properties & methods
let person = {
  name: "Andi", // property
  greet() {
    console.log("Hello!");
  },
};
person.greet();

// add & delete property
let person2 = {
  name: "Andi",
  age: 21,
};
console.log(person2);

person2.hobby = "Coding";
console.log(person2);

delete person2.age;
console.log(person2);

// accessing value
// 1 (.)
let person3 = {
  name: "Andi",
  age: 21,
};
console.log(person3.name);

// []
console.log(person3["name"]);

// optional chaining
let user = {
  address: "",
};

console.log(user.address);
// console.log(user.address.street);
console.log(user.address?.street);

// list properties
let user2 = {
  name: "Andi",
  age: 21,
};
console.log(Object.keys(user2));

// looping object
let user3 = {
  name: ["Andi", "Budi"],
  age: 21,
};

for (let keys in user3) {
  console.log(keys);
}

// getter and setter
let user4 = {
  firstName: "John",
  lastName: "Smith",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    // "John Wick"
    const splittedValue = value.split(" "); // ["John", "Wick"]
    this.firstName = splittedValue[0];
    this.lastName = splittedValue[1];
  },
};

console.log(user4.fullName);
user4.fullName = "Alice Cooper";
console.log(user4.fullName);
console.log(Object.keys(user4));

// descructuring assignment
let a, b;
[a, b] = [1, 2];
console.log(a);
console.log(b);

// spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let finalArr = [...arr1, ...arr2];
// console.log(finalArr)

let finalObj = {
  ...car,
  ...person,
};
console.log(finalObj);
