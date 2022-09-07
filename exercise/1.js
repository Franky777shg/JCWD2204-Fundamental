function myFunc(arr) {
  // write code here
  let age = [];
  let score = [];

  arr.forEach((value) => {
    age.push(value.age);
    score.push(value.score);
  });

  let res = {
    score: {
      highest: Math.max(...score),
      lowest: Math.min(...score),
      average: score.reduce((a, b) => a + b) / score.length,
    },
    age: {
      highest: Math.max(...age),
      lowest: Math.min(...age),
      average: age.reduce((a, b) => a + b) / age.length,
    },
  };

  return res;
}

let arrStudent = [
  {
    name: "Andi",
    email: "andi@gmail.com",
    age: 39,
    score: 70,
  },
  {
    name: "Budi",
    email: "budi@gmail.com",
    age: 19,
    score: 90,
  },
  {
    name: "Lala",
    email: "lala@gmail.com",
    age: 49,
    score: 80,
  },
  {
    name: "Yuni",
    email: "yuni@gmail.com",
    age: 29,
    score: 60,
  },
];

console.log(myFunc(arrStudent));
/* 
{
    score: {
        highest: n,
        lowest: n,
        average: n
    },
    age: {
        highest: n,
        lowest: n,
        average: n
    }
} 
*/
