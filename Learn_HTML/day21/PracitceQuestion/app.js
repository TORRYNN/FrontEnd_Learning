// Qsl. Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me'
let body=document.querySelector('body');

let input = document.createElement('input');

body.append(input);

let button= document.createElement('button');
button.innerText="Click Me"

body.append(button);

// Qs2. Add following attributes to the element :
// 1. Change placeholder value of input to "username"
// 2. Change the id of button to "btn'

input.placeholder='username';
input.id='btn';

// Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.

let btnn=document.getElementById('btn');
btnn.style.backgroundColor='blue';
btnn.style.color='white';

// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. Change its color to purple.

let h1=document.createElement('h1');
h1.innerText='DOM Practice'
h1.style.textDecoration='underline'

body.append(h1);


// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold.

let p=document.createElement('p');
p.innerHTML="Apna College <b> Delta </b> Practice";
document.querySelector("body").append(p);