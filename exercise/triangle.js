let triangle = (n) => {
  let result = "";
  // *
  // * *
  // * * *
  // * * * *

  for (let i = 1; i <= n; i++) {
    // i = 5
    console.log("i", i);
    for (let j = 1; j <= i; j++) {
      // j = 3
      console.log("j", j);
      result += "* ";
    }
    result += "\n";
  }

  console.log(result);
};

triangle(4);
// *
// * *
// * * *
// * * * *

function horiztonal(num) {
  var stars = "";
  for (var i = 0; i <= num; i++) {
    stars = stars + " *";
  }
  return stars;
}

function buildTri(num) {
  var stars = "";
  for (var i = 0; i < num; i++) {
    stars = stars + horiztonal(i) + "\n";
  }
  console.log(stars);
}

buildTri(5);
