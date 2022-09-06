class User {
  greeting() {
    console.log("Hello!");
  }
}

let User2 = class {
  greeting() {
    console.log("Hello!");
  }
};

let user = new User();
user.greeting();

class User3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let newUser = new User3("Andi", 21);
let newUser2 = new User3("Budi", 20);
let newUser3 = new User3("Lala", 29);
console.log(newUser);
console.log(newUser.name);

// access modifier
class User4 {
  name;
  #email;
  static age = 21;
  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    console.log(this.#email);
  }
}

const newUser4 = new User4("Yono", "yono@gmail.com");
console.log(newUser4.name);
newUser4.getEmail();
console.log(User4.name);
console.log(User4.age);
