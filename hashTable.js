let obj = {
  David: "001",
  Buchanan: "002",
};

obj.David = "003";
// console.log(obj.David);

const myMap = new Map();
console.log(myMap);

myMap.set("David", "001");
myMap.set("Buchanan", "002");

console.log(myMap);

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

console.log(myMap.get("David"));
