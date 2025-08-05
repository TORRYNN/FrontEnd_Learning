// let btn=document.querySelector('button');
// let p=document.querySelector('p');
// let h1=document.querySelector('h1');

// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor="red";
// }

// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor); 


let frm=document.querySelector('form');

frm.addEventListener("submit",function (event){
    event.preventDefault();
    
    let inp=document.querySelector('#user');
    let pswd=document.querySelector('#password')
    alert(`hi ${inp.value} , your password is ${pswd.value}`);
})


// Extracting Form Data
