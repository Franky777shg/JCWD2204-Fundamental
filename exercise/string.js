// Ada 2 string, di simpan di 2 variabel yang berbeda yaitu a dan b.
// Bentuklah 2 string ini menjadi string baru dengan formula string yang lebih pendek + string yang lebih panjang + string yang lebih pendek.

// Contoh:
// let a = '12'
// let b = '3'

// Maka string baru yang akan terbuat adalah '3123'

let a = "dan";
let b = "keren";

if (a.length > b.length) {
  console.log(b + a + b);
} else {
  console.log(a + b + a);
}
