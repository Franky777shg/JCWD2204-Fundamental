class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);

    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
  }

  printList() {
    const curr = this.head;

    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("Please enter a valid index");
    } else {
      const node = new Node(element);
      let curr = this.head;

      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let prev;
        let it = 0;

        while (it < index) {
          it++;
        }

        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
        }

        prev.next = node;
        node.next = curr;
      }
      this.size += 1;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Please enter a valid index");
    } else {
      let curr = this.head;
      let prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }

      this.size -= 1;

      return curr.element;
    }
  }

  removeElement(element) {
    let current = this.head;
    let prev = null;

    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }

        this.size -= 1;

        return current.element;
      }

      prev = current;
      current = current.next;
    }

    return null;
  }

  indexOf(element) {
    let count = 0;
    let current = this.head;

    while (current != null) {
      if (current.element === element) {
        return count;
      }

      count += 1;
      current = current.next;
    }

    return -1;
  }
}
