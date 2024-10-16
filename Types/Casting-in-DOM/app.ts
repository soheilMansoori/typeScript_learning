// as < > 
const number = 12 as const
let numbers = <const>[1, 2, 3]

// number.push(4) // error

// Casting in dom projects
const linkElem = document.querySelector('.link')
// console.log(linkElem.href); // error but linkElem' is possibly 'null' or 'Element'

const linkElement = document.querySelector('.link') as HTMLAnchorElement;  // way 1 best
console.log(linkElement.href); // ok

const userNameInput = <HTMLInputElement>document.querySelector('input'); // way 2  best
console.log(userNameInput.value); // ok

const passwordInput = document.querySelector('.password') as HTMLInputElement;
console.log(passwordInput.placeholder); // ok

const btn = document.querySelector('button')! // way 3 this way just for btns
console.log(btn.innerHTML); // ok

const btnElem = document.querySelector('button')

console.log(btnElem?.innerHTML); // way 4
console.log((<HTMLButtonElement>btnElem).innerText); // way 5
console.log((btnElem as HTMLButtonElement).innerText); // way 6









