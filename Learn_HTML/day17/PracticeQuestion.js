// Question 1: Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6]

let roll= (Math.floor(Math.random()*6))+1; 
console.log(roll);

// Question 2: Create an object representing a car that stores the following properties for the 
// car:name, model, color.

let car={
    name:"Thar ROXX",
    model:"Top",
    color:"Black"
}

console.log(car.color);

// Create an object Person with their name, age and city. Edit their city's original value to change it to "New York". Add a new property country and set it to the United States.

let person={
    name:"Pratham",
    age:21,
    city:"Florida"
}

person.city="New York";

person.country="United States";

console.log(person);