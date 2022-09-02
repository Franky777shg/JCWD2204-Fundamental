let BMI = (tinggi, berat) => {
  let res = berat / tinggi ** 2;
  if (res < 18.5) {
    console.log("less weight");
  } else if (res > 18.5 && res < 24.9) {
    console.log("ideal");
  } else if (res > 25.0 && res < 29.9) {
    console.log("ideal");
  } else if (res > 30.0 && res < 39.9) {
    console.log("ideal");
  } else {
    console.log("obesity");
  }
};

BMI(1.7, 120);
