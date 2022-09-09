class Stack {
  #maxSize;
  #container = [];
  #isFull() {
    return this.#container.length >= this.#maxSize;
  }
  #isEmpty() {
    return this.#container === 0;
  }

  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
  }

  push(element) {
    if (this.#isFull()) {
      console.log("Stack Overflow");
      return;
    }

    this.#container.push(element);
  }

  pop() {
    if (this.#isEmpty()) {
      console.log("Stack Underflow");
      return;
    }

    this.#container.pop();
  }

  getElements() {
    return this.#container;
  }
}

let stack = new Stack();
console.log(stack.getElements());
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.getElements());
// stack.push(11);
// console.log(stack.getElements());
