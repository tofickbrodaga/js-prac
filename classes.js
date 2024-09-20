// 1

class Persona {
    constructor(name, email, role = 'user') {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    login() {
        console.log(`user ${this.name} login.`);
        return this;
    }

    logout() {
        console.log(`user ${this.name} log out.`);
        return this;
    }
}

class Moderator extends Persona {
    constructor(name, email, role = 'moderator') {
        super(name, email, role);
    }

    removeParticipant(participant) {
        console.log(`user ${participant.name} removed by ${this.name}.`);
        return this;
    }
}

let participant1 = new Persona('michael', 'michael@ebu');
participant1.login().logout();
let participant2 = new Persona('egor', 'yr@kira.com');
participant2.login();
let moderator1 = new Moderator('albo', 'tenigin.aa@talantiuspeh.ru');
moderator1.login().logout();
let moderator2 = new Moderator('torshin', 'bigsmokedad@torshin.ru');
moderator2.login().removeParticipant(participant1).logout();

// 2
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(pr) {
      this.products.push(pr);
    }
  
    removeProduct(pr) {
      const index = this.products.indexOf(pr);
      this.products.splice(index, 1);
    }
  
    getTotalPrice() {
      let sum = 0;
      for (const product of this.products) {
        sum += product.price;
      }
      return sum;
    }
  
    checkout() {
      console.log(`price: ${this.getTotalPrice()}`);
      console.log('product:');
      for (let i = 0; i < this.products.length; i++) {
        console.log(`${i + 1})`, this.products[i].name);
      }
      this.products = [];
    }
  }
  
  const pr1 = new Product('banana', 10);
  const pr2 = new Product('pomdoro', 35);
  const pr3 = new Product('tv', 32);
  const cart = new ShoppingCart();
  cart.addProduct(pr1);
  cart.addProduct(pr2);
  cart.addProduct(pr3);
  console.log(cart.getTotalPrice());
  console.log(cart.products);
  cart.checkout();
  console.log(cart.products);

  // 3
  class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  }
  
  class Library {
    constructor(name, books = []) {
      this.name = name;
      this.books = books;
    }
  
    addBook(book) {
      this.books.push(book);
      return this;
    }
  
    findBooksByAuthor(author) {
      return this.books.filter((book) => book.author === author);
    }
  
    listAllBooks() {
      this.books.forEach((book) => {
        console.log(`${book.title} - ${book.author} - ${book.pages} pages`);
      });
      return this;
    }
  }
  
  class LibraryUser {
    constructor(name, library) {
      this.name = name;
      this.library = library;
      this.borrowedBooks = [];
    }
  
    borrowBook(book) {
      if (!this.library.books.includes(book)) {
        console.log(`book "${book.title}" not found in library "${this.library.name}"`);
        return this;
      }
      if (this.borrowedBooks.length >= 3) {
        console.log(`user ${this.name} have a max books - (3)`);
        return this;
      }
      if (this.borrowedBooks.includes(book)) {
        console.log(`book "${book.title}" has been added`);
        return this;
      }
      this.borrowedBooks.push(book);
      console.log(`book "${book.title}" has been added users ${this.name}`);
      return this;
    }
  
    returnBook(book) {
      if (!this.borrowedBooks.includes(book)) {
        console.log(`book "${book.title}" don't added for ${this.name}`);
        return this;
      }
      this.borrowedBooks.splice(this.borrowedBooks.indexOf(book), 1);
      console.log(`book "${book.title}" has been returned ${this.name}`);
      return this;
    }
  }
  
  const book1 = new Book('Kafka', 'Prevraschenie', 50);
  const book2 = new Book('War and Piece', 'Tolstoy', 4000);
  const book3 = new Book('Test', 'Test', 10);
  const book4 = new Book('Iskusstvo schemotehniki', 'Sterlyagov', 6000);
  const library = new Library('library1', [book1, book2, book3]);
  library.addBook(book4);
  console.log('Books kafkas');
  console.log(library.findBooksByAuthor('a1'));
  console.log('\nall book');
  console.log(library.listAllBooks());
  const user1 = new LibraryUser('user_me', library);
  user1.borrowBook(book1).borrowBook(book2).borrowBook(book3).borrowBook(book4);
  user1.returnBook(book1).borrowBook(book4);
  console.log(user1.borrowedBooks);

// 4
class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  constructor(products = [], customer) {
    this.products = products;
    this.customer = customer;
    this.totalPrice = 0;
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.products.reduce((total, product) => total + product.price, 0);
    return this.totalPrice;
  }

  addProduct(product, quantity = 1) {
    for (let i = 0; i < quantity; i++) {
      this.products.push(product);
    }
    this.calculateTotal();
    return this;
  }

  printOrder() {
    console.log(`order for ${this.customer.name} (${this.customer.email}):`);
    console.log('products:');
    this.products.forEach((product, index) => {
      console.log(`${index + 1})`, `${product.name} ($${product.price})`);
    });
    console.log(`price: $${this.totalPrice}`);
    return this;
  }
}

const user_0 = new Customer('alber', 'albert@mail.ru');
const user_1 = new Customer('yr', 'yr@mail.ru');
const product_0 = new Product('cat', 10);
const product_1 = new Product('dog', 15);
const product_2 = new Product('pasha shishkin', 87);
const product_3 = new Product('vitalik', 1);
const order_0 = new Order([product_0, product_1, product_2], user_0);
const order_1 = new Order([product_2], user_1);
order_1.addProduct(product4);
console.log(order_0.calculateTotal());
order_0.printOrder();
console.log();
order_1.printOrder();

// 5
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log('animal eat');
    return this;
  }

  makeSound() {
    console.log('animal make sound');
    return this;
  }
}

class Dog extends Pet {
  makeSound() {
    console.log('dog say meow');
    return this;
  }

  sleep() {
    console.log('dog sleep');
    return this;
  }
}

class Cat extends Pet {
  makeSound() {
    console.log('cat say meow');
    return this;
  }

  sleep() {
    console.log('cat sleep');
    return this;
  }
}

const dog = new Dog('yegor roganoff', 5);
const cat = new Cat('vitalik', 2);
dog.eat().sleep().makeSound();
cat.eat().sleep().makeSound();

// 6
class Expression {
  constructor(num1, num2, operator) {
    this.num1 = num1;
    this.num2 = num2;
    this.operator = operator;
  }

  evaluate() {
    switch (this.operator) {
      case '+':
        return this.num1 + this.num2;
      case '-':
        return this.num1 - this.num2;
      case '*':
        return this.num1 * this.num2;
      case '/':
        if (this.num2 === 0) {
          throw new Error('divide by zero');
        }
        return this.num1 / this.num2;
      default:
        throw new Error('value error');
    }
  }

  toString() {
    try {
      return `${this.num1} ${this.operator} ${this.num2} = ${this.evaluate()}`;
    } catch (e) {
      return e.message;
    }
  }
}

class Addition extends Expression {
  constructor(num1, num2) {
    super(num1, num2, '+');
  }
}

class Subtraction extends Expression {
  constructor(num1, num2) {
    super(num1, num2, '-');
  }
}

class Multiplication extends Expression {
  constructor(num1, num2) {
    super(num1, num2, '*');
  }
}

class Division extends Expression {
  constructor(num1, num2) {
    super(num1, num2, '/');
  }
}

const expr = new Expression(1, 0, '/');
const add = new Addition(1, 1);
const sub = new Subtraction(3, 5);
const mult = new Multiplication(3, -2);
const div = new Division(10, 1.5);

console.log(expr.toString());
console.log(add.toString());
console.log(sub.toString());
console.log(mult.toString());
console.log(div.toString());
console.log(div.evaluate());
console.log(expr.toString());