const majority = (arr) => {
  let hashMap = {
    // 1: 1,
    // 2: 1,
    // 3: 1,
    // 4: 2,
  };

  for (digit of arr) {
    if (!hashMap[digit]) {
      hashMap[digit] = 1;
    } else {
      hashMap[digit] += 1;
    }
  }

  // buat dua variabel satu buat nampung result dan satu lagi buat counter
  let res;
  let counter = 0;

  // looping buat cari yang terbanyak
  for (keys in hashMap) {
    if (hashMap[keys] > counter) {
      res = keys;
      counter = hashMap[keys];
    }
  }

  return res;
};

console.log(majority([1, 2, 3, 4, 4, 5, 5, 5]));
