// Selecting Element.
let a= document.getElementById("#do");
// Querry Selector

// innertext: Shows the only the visible text.

// innercontent: shows  all the text.

// innerhtml: Shows all the text with tags.

// Manipulating Attribute: It is used to manipulate the attributes.

a.getAttribute("p");

a.setAttribute("p", "text");


// Inseting element in Document

let newP=document.createElement("p");
newP.innerText="Hi, I am a new p";
console.dir(newP);