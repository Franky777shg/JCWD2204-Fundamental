// console.log(Math.ceil(Math.random() * 10));

const test = async () => {
  console.log(1);
  await setTimeout(() => {
    console.log(2);
  }, 2000);
  console.log(3);
};
test();
