function myFunc(arr1, arr2) {
  //write code here
  // copy isi dari arr1 ke dalam merged
  let merged = [...arr1];

  // looping sebanyak item di arr2
  for (let i = 0; i < arr2.length; i++) {
    let dataExist = false;

    // looping array merged
    for (let j = 0; j < merged.length; j++) {
      // cek value dari objek.name
      if (arr2[i].name === merged[j].name) {
        // kalau datanya sama, maka dataExist diubah menjadi true
        dataExist = true;
        // stop looping
        break;
      }
    }

    // jika data nya tidak ada yang sama (aman), maka push data nya ke dalam array merged
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
