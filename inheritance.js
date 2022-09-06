class Product {
  constructor(name, price) {
    this.productName = name;
    this.price = price;
  }
}

class Book extends Product {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }
}

let book1 = new Book("Novel", 200000, "Rudi");
console.log(book1);
