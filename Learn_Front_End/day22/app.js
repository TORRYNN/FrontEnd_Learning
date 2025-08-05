// let btns=document.querySelectorAll("button");
// for(let btn of btns){
//     // btn.addEventListener("click",sayhello);
//     // btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function(){
//         btn.style.backgroundColor="red";
//         setTimeout(() => {
            
//             btn.style.backgroundColor="";
//         }, 3000);
//     });
// }

// function sayhello(){
//     alert("Hello")
// }

// function sayName(){
//     alert("Sher")
// }

let btn = document.querySelector("button");
btn.addEventListener('click',function(){
    let h1= document.querySelector("h1");
    let randomcolor= randomColor();
    h1.innerHTML=randomcolor;
    document.querySelector("div").style.backgroundColor=randomcolor;


})

function randomColor(){
     let red=Math.floor(Math.random()*255);
     let green=Math.floor(Math.random()*255);
     let blue=Math.floor(Math.random()*255);
      let color = `rgb(${red},${green},${blue})`;

     return color;
}