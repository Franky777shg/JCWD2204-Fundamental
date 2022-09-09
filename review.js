let person = {
  name: "Andi",
  age: 21,
};

let person2 = {
  name: "Budi",
  age: 21,
};

console.log(person.name);
console.log(person["name"]);

let list = [
  {
    name: "Andi",
    age: 21,
  },
  "asd",
  true,
  {
    name: "Budi",
    age: 24,
  },
  13,
];

// console.log(list[1].age);

list.forEach((item) => console.log(item));

function a() {
  return function b() {
    return {
      age: [1, "asd", true],
      list: [{ a: "umbrella" }],
    };
  };
}

console.log(a()().age[2]);

let linkedList = {
  element: "A",
  next: {
    element: "New Value",
    next: {
      element: "C",
      next: null,
    },
  },
};
