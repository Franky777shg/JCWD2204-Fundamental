function detectNumber(arr) {
  // with sort function
  //   let arrSorted = arr.sort((a, b) => a - b);
  //   console.log(arrSorted);
  //   console.log(average);
  //   return `Lowest: ${arrSorted[0]}, Highest: ${
  //     arrSorted[arr.length - 1]
  //   }, Average: ${arr.reduce((a, b) => a + b) / arr.length}`;

  // without sort function
  let lowest = arr[0];
  let highest = arr[0];
  let total = 0;

  arr.forEach((element) => {
    if (element < lowest) {
      lowest = element;
    }
    if (element > highest) {
      highest = element;
    }
    total += element;
  });

  return `Lowest: ${lowest}, Highest: ${highest}, Average: ${
    total / arr.length
  }`;
}

let arr = [1, 3, 5, 4, 2];
console.log(detectNumber(arr));
