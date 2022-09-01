// let word = "baru";
// let wordReverse = ""; // urab

// for (let i = word.length - 1; i >= 0; i--) {
//   // i = 3 2 1 0
//   wordReverse += word[i];
// }

// if (word === wordReverse) {
//   console.log("palindrome");
// } else {
//   console.log("not palindrome");
// }

// bisa cek kalimat dengan huruf besar juga
let word = "rAcE Car";

// ini untuk menampung string yang sudah dibalik
let wordReverse = "";

// menghilangkan spasi
let wordClean = word.replace(/ /g, "").toLowerCase();
// console.log(wordWithoutSpace);

for (let i = wordClean.length - 1; i >= 0; i--) {
  // i = 3 2 1 0
  wordReverse += wordClean[i];
}

if (wordClean === wordReverse) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}
