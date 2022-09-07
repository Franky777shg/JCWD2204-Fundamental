function myFunc(arr1, arr2) {
  //write code here
  let merged = [...arr1];

  for (let i = 0; i < arr2.length; i++) {
    let dataExist = false;

    for (let j = 0; j < merged.length; j++) {
      if (arr2[i].name === merged[j].name) {
        dataExist = true;
        break;
      }
    }

    if (!dataExist) {
      merged.push(arr2[i]);
    }
  }

  return merged;
}

let dataStu1 = [
  {
    name: "student 1",
    email: "student1@gmail.com",
  },
  {
    name: "student 2",
    email: "student2@gmail.com",
  },
];

let dataStu2 = [
  {
    name: "student 1",
    email: "student1@gmail.com",
  },
  {
    name: "student 3",
    email: "student3@gmail.com",
  },
];

console.log(myFunc(dataStu1, dataStu2));
/* [
{
    name: "student 1",
    email: "student1@gmail.com",
  },
{
    name: "student 2",
    email: "student2@gmail.com",
  },
  {
    name: "student 3",
    email: "student3@gmail.com",
  },
]
*/
