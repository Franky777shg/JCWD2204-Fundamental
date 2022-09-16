const { sum, looping } = require("./testing");

test("function sum should be return 10", () => {
  expect(sum()).toBe(10);
});

test("function looping", () => {
  expect(looping(3)).toBe(3);
});
