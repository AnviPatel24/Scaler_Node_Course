// console.log("Scalar is Awesome");
// function sayHello() {
//   console.log("Hello from ANvi");
// }
// sayHello();

// for window related things which can work on browser only
//console.log(window);

//this is for node js
//console.log(global);
//for js
//window.setTimeout();
const calculator = require("./calculator");
calculator.addition(3, 5);
calculator.multiplication(3, 5);
calculator.subtraction(5, 3);
calculator.division(30, 3);
let age = 18;

// every file itself is a module.
// to make it file oriented global is not used becase it make confusion .
