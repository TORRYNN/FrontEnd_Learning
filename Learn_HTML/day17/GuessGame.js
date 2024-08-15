const max = parseInt(prompt("Enter the max number"), 10);

const randomNumber = Math.floor(Math.random() * max) + 1;
console.log(randomNumber);

let guess = prompt("Guess the number or type 'quit' to exit:");

while (true) {
    if (guess.toLowerCase() === "quit") {
        console.log("User quit");
        break;
    }
    
    guess = parseInt(guess, 10); // Convert the guess to a number
    
    if (guess === randomNumber) {
        console.log("Your guess is right!");
        break;
    } else if (guess > randomNumber) {
        console.log("Your guess is Higher");
    } else if (guess < randomNumber) {
        console.log("Your guess is Lower");
    }
    
    guess = prompt("Guess again or type 'quit' to exit:");
}
