function angleCircle(angle1, angle2) {
  return 180 - angle1 - angle2;
}

function areaRectangle(panjang, lebar) {
  return {
    area: panjang * lebar,
    perimeter: 2 * (panjang + lebar),
  };
}

function circle(r) {
  return {
    diameter: r * 2,
    circumference: 2 * 3.14 * r,
    area: 3.14 * Math.pow(r, 2),
  };
}

function days(days) {
  const daysinYear = 365;
  const daysInMonth = 30;

  const year = Math.floor(days / daysinYear);
  const residualYear = days % daysinYear;
  const month = Math.floor(residualYear / daysInMonth);
  const residualMonth = residualYear % daysInMonth;

  return `${year} year, ${month} month, ${residualMonth} days`;
}

function diffDays() {
  const date1 = new Date("2022-01-05");
  const date2 = new Date("2022-03-15");
  return (date2 - date1) / (24 * 60 * 60 * 1000);
}

module.exports = {
  angleCircle,
  areaRectangle,
  circle,
  days,
  diffDays,
};
