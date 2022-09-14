const stock = (arr) => {
  let realPrice = [...arr];
  let arrSorted = arr.sort((a, b) => a - b); // [1,3,4,5,6,7]

  for (let i = arrSorted.length - 1; i >= 1; i--) {
    let smallestPrice = arrSorted[0];
    let biggestPrice = arrSorted[i];

    if (realPrice.indexOf(smallestPrice) < realPrice.indexOf(biggestPrice)) {
      return biggestPrice - smallestPrice;
    }
  }
};

console.log(stock([7, 1, 5, 3, 9, 4]));
