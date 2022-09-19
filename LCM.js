const lcm = (a, b) => {
  let limit = a * b; // 120
  let multipleA = [a]; // [12, 24, 36, ]
  let multipleB = [b];
  let intersection = [];

  // cari kelipatan angka pertama
  let i = 0;
  do {
    multipleA.push(multipleA[i] + a);
    i++;
  } while (multipleA[i] < limit);

  // cari kelipatan angka kedua
  let j = 0;
  do {
    multipleB.push(multipleB[j] + b);
    j++;
  } while (multipleB[j] < limit);

  console.log(multipleA);
  console.log(multipleB);

  // cari kelipatan yang sama
  multipleA.forEach((item) => {
    if (multipleB.includes(item)) intersection.push(item);
  });
  console.log(intersection);

  // cari yang terkecil dari kelipatan yang sama
  return Math.min(...intersection);
};

console.log(lcm(5, 10));
