// This value in ->
// Global -> Window
console.log(this);

// function -> Window

function abcd(){
    console.log(this);
}

abcd();

// method-> Object
var obj={
    name:function(){
        console.log(this);
    },
    age:12,
    email:"abfcd@gmai.com"
}
obj.name();

// function inside method(es5) -> window

var obj2={
    name:function(){
        console.log(this);

        function child(){
        console.log(this);
        }
        child();
    },
    age:12,
    email:"abfcd@gmai.com"
}

obj2.name();


// function inside method(es6) -> object
var obj3={
    name:function(){
        console.log(this);

        const child=()=>{
        console.log(this);
        }
        child();
    },
    age:12,
    email:"abfcd@gmai.com"
}

obj3.name();


// constructor function -> new blank object

let btn=document.querySelector("#dw");

btn.addEventListener("click",()=>{
    console.log("hello");
    btn.textContent="Starting..";
    setTimeout(() => {
    btn.textContent="dowload";
        
    }, 2000); 
})

btn.setAttribute