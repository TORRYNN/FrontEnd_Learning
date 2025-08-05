// Using readline for input and output processing.
// This line imports the readline module into the node.js
// Readline provides an interface for reading data from a readable stream.
const readline = require('readline');

// It is creating a new readline interface instance.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter the popcorn size.
rl.question('Enter Popcorn size: ', (size) => {
  if (size === "XL") {
    console.log("Price: Rs 250");
  } else if (size === "L") {
    console.log("Price: Rs 200");
  } else if (size === "M") {
    console.log("Price: Rs 100");
  } else {
    console.log("Price: Rs 50");
  }

//  Closes the readline interface.
  rl.close();
});
