class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  cart = [];

  addToCart(item, qty) {
    // menambahkan property quantity ke dalam object product
    item.quantity = qty;
    // menmabahkan product ke dalam array cart
    this.cart.push(item);
  }

  totalTrans() {
    let total = 0;
    this.cart.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.name} x ${item.quantity} = ${
          item.quantity * item.price
        }`
      );
      total += item.quantity * item.price;
    });
    console.log(`Total = ${total}`);
  }

  checkout(moneyFromUser) {}
}

let listProduct = [
  new Product("Anggur", 12000),
  new Product("Apel", 12000),
  new Product("Pisang", 12000),
  new Product("Jeruk", 12000),
];

// console.log(listProduct);

let transaction = new Transaction();

transaction.addToCart(listProduct[3], 3);
transaction.addToCart(listProduct[0], 5);
transaction.addToCart(listProduct[1], 5);
// transaction.addToCart(listProduct[1], 5);
transaction.totalTrans();
// transaction.checkout(100000);
