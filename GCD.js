const gcd = (a, b) => {
  let factorA = [];
  let factorB = [];
  let intersection = [];

  // cari faktor bilangan pertama
  let i = 1;
  while (i <= a) {
    if (a % i === 0) factorA.push(i);
    i++;
  }

  // cari faktor bilangan kedua
  let j = 1;
  while (j <= b) {
    if (b % j === 0) factorB.push(j);
    j++;
  }

  // cari faktor yang sama
  factorA.forEach((item) => {
    if (factorB.includes(item)) intersection.push(item);
  });

  console.log(factorA);
  console.log(factorB);
  console.log(intersection);

  // dari faktor yang sama, cari yang terbesar
  return Math.max(...intersection);
};

console.log(gcd(26, 39));
