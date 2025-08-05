async function greet(){
    return "Hello , World!";
}

console.log(greet());

console.log(greet().then(message=>console.log(message)));

function getNUM(){
   return new Promise((resolve, reject) =>{
    setTimeout(() => {
        let num=Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve();
    }, 1000);
   })
}

async function demo(){
    await getNUM();
    await getNUM();
     getNUM();
}


// First API request

let url= "https://catfact.ninja/fact";


fetch(url)
.then((response) =>{
    console.log(response)
})
.catch((error) =>{
    console.log(error);
})

