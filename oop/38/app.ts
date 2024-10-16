// * 1
class HtmlElement<T> {
  constructor(public element: T) {
    this.element = element;
  }

  getElement() {
    return this.element;
  }
}

class HtmlElement2<T> {
  constructor(public element: T) {
    this.element = element;
  }

  getElement() {
    return this.element;
  }
}

// let elem = document.createElement("input"); // ok
let elem = document.createElement("button"); // ok
let userPasswordInput = new HtmlElement(elem); // but its error and ts not say

// const elem = document.createElement("input"); // ok
// const elem2 = document.createElement("button"); // error
// const usernameInput = new HtmlElement2<HTMLInputElement>(elem2); // now say with generic type

// * 2
class List {
  private items: any[] = [];

  addItem(item: any) {
    this.items.push(item);
    return true;
  }

  popItem() {
    return this.items.pop();
  }
}

const numbersList = new List();

numbersList.addItem(10); // ok
numbersList.addItem(20); // ok
numbersList.addItem("30"); // not ok

console.log(numbersList.popItem().toFixed()); // error but to fixed not work in strings but ts not say error
console.log(numbersList.popItem().toFixed()); // ok
console.log(numbersList.popItem().toFixed()); // ok

class NumberList<T> {
  items: any[] = [];

  addItem(item: T) {
    this.items.push(item);
    return true;
  }

  popItem(): T {
    return this.items.pop();
  }
}

const numbersList2 = new NumberList<number>();
numbersList2.addItem(10); // ok
numbersList2.addItem(20); // ok
// numbersList2.addItem("30"); // now ts know and error

console.log(numbersList2.popItem().toFixed()); // error and ts say that
console.log(numbersList2.popItem().toFixed()); // ok
console.log(numbersList2.popItem().toFixed()); // ok

// * 3
class MainList<T> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  popItem(): T | undefined {
    return this.items.pop();
  }
}

const newScore = new MainList<string>();
newScore.addItem("soheil");
newScore.addItem("masom");
newScore.addItem("ahad");
