// contoh if
let age = 16;

if (age >= 17) {
  console.log("You can now create an ID Card");
} else {
  console.log("You can not create an ID Card");
}

// else if
let grade = "C";

if (grade === "A") {
  console.log("Excelent!");
} else if (grade === "B") {
  console.log("Good!");
} else if (grade === "C") {
  console.log("Average!");
} else {
  console.log("Invalid!");
}

if (0) {
  console.log("true");
} else {
  console.log("false");
}

// ternary operator
console.log(0 ? "true" : "false");

// let umur

// kalau umur nya dibawah sama dengan 17, console log "di bawah umur"
// kalau umur nya antara 18 - 25, console.log bebas
// kalau umur nya lebih dari sama dengan 26, console.log bebas
// kalau umurnya bukan angka, console.log("invalid")

let umur = "17";

if (typeof umur !== "number") {
  console.log("invalid");
} else if (umur <= 17) {
  console.log("di bawah umur");
} else if (umur >= 18 && umur <= 25) {
  console.log("remaja");
} else if (umur >= 26) {
  console.log("dewasa");
}
