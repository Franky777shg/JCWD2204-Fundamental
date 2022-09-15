class ListToDo {
  constructor(data) {
    this.data = data;
  }

  processing = () => {
    let i = 0;
    while (i < this.data.length) {
      let promiseQueue = new Promise((resolve) => resolve(this.data[i]));

      const randomInterval = () => {
        return Math.ceil(Math.random() * 10);
      };

      const executePromise = async () => {
        try {
          let result = await promiseQueue;
          //   let time = randomInterval();
          console.log(`${result} Done in ${randomInterval()} minutes`);
        } catch (error) {
          console.log(error);
        }
      };

      executePromise();

      i++;
    }
  };
}

module.exports = ListToDo;
