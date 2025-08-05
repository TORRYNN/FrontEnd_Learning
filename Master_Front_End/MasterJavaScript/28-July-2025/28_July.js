// Q1. Visualize a nested function call (with call stack)
function a() {
  console.log("Inside a");
  b();
}

function b() {
  console.log("Inside b");
  c();
}

function c() {
  console.log("Inside c");
}

a();


// Output: 
// Inside c 
// Inside b 
// Inside a


// Q2. What is returned when nothing is returned?
function test1() {}
const result1 = test1();
console.log(result1); //Undefined

const test2 = () => {};
const result2 = test2();
console.log(result2); //undefined

var name = "Global";

function printName() {
  console.log(name);
  var name = "Local";
}
printName();

let count = 0;

{
  console.log(count); // Line A
  let count = 1;
  console.log(count); // Line B
}
