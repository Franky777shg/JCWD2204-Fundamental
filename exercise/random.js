// Buatlah sebuah code html yang berfungsi sebagai game penebak angka.
// Buatlah sebuah code untuk men generate acak angka 1 sampai 5.
// User lalu disuruh memasukan angka juga dari 1 sampai 5.
// Kalau angka yang dimasukan user sama dengan angka yang digenerate secara acak,
// maka tampilkan user benar, kalau salah tampilkan user salah.

// Example:
// Angka random: 3
// Angka user: 2
// Kamu salah

let random = Math.ceil(Math.random() * 5);
// console.log(random);
let guess = 3;

if (random == guess) {
  console.log(`Angka Random: ${random}
    Angka Anda: ${guess}
    Jackpot`);
} else {
  console.log(`Angka Random: ${random}
    Angka Anda: ${guess}
    Empty`);
}
