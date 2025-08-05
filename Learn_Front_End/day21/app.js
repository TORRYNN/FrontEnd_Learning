
let body=document.querySelector('body');
let container = document.createElement('div');


body.append(container);

let para1= document.createElement('p');
let para2= document.createElement('p');

para1.innerText="Hey I'm red!";
para1.style.color='red';

container.append(para1);

let heading=document.createElement('h3');

heading.innerText="I'm a blue h3";

heading.style.color='blue';

container.append(heading);

let innerdiv = document.createElement('div');

 innerdiv.style.width='100%';
 innerdiv.style.height='100px';
 
 innerdiv.style.border='2px solid black';
 innerdiv.style.backgroundColor='pink';

 container.append(innerdiv);

 let heading1=document.createElement('h1');

heading1.innerText="I'm in a div";

para2.innerText="Me Too";
innerdiv.append(heading1);
innerdiv.append(para2);