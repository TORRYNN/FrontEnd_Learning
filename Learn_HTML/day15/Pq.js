// Qs. For the giver start state of an array, change it to final form using methods.

// start:['January','July','March','August']
// final:['July','June','March','August']

let start=['January','July','March','August']

start.shift();
console.log(start);

start.shift();
console.log(start);

start.unshift("June");
console.log(start);

start.unshift("July");
console.log(start);

// Qs. For the giver start state of an array, change it to final form using splice.

// start:['January','July','March','August']
// final:['July','June','March','August']

let start1=['January','July','March','August'];
start1.splice(0,2,"July","June")

console.log(start1);