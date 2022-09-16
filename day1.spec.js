const {
  angleCircle,
  areaRectangle,
  circle,
  days,
  diffDays,
} = require("./day-1");

describe("testing soal bangun datar", () => {
  test("angle circle", () => {
    expect(angleCircle(60, 50)).toBe(70);
  });

  test("area rectangle", () => {
    expect(areaRectangle(4, 5)).toMatchObject({
      area: 20,
      perimeter: 18,
    });
  });
});

const daysCallback = () => {
  test("days", () => {
    expect(days(1000)).toBe("2 year, 9 month, 0 days");
  });
};

describe("testing soal hari", daysCallback);
