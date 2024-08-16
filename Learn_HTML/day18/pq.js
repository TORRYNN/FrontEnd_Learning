// Create a function that prints a poem.

function poem(){
    console.log("Chin Tapak Dumm Dumm");
}

poem();

// Create a function to roll a dice and always display the valus of the dice (1 to 6).
function dice(){
    console.log((Math.floor(Math.random()*6)+1))
}

dice()

function avg(num1,num2,num3){

    return (num1+num2+num3)/3;
}

console.log(avg(21,31,14));

function table(num){
    for(let i=1;i<=10;i++)
    {
        console.log(`${num} * ${i} = ${num*i}`)
    }
}

table(5)

function sum(n){
    return (n*(n+1))/2;
}

console.log(sum(5));

// Create a function that returns the concatenation of all the stirngs in an array.
let str=["hi", "there ", "Pratham", " This", "Side"];
function con(str){ 
    let res="";
    for(let i=0;i<str.length;i++){
        res+=str[i];
    }

    console.log(res);

}

con(str)

// Guess the output:
let greet="Hello";
function changeGreet(){
        let greet ="namaste";
        console.log(greet);  //namaste
        function innerGreet(){
        console.log(greet);//namaste
        }
}
console.log(greet); //hello
changeGreet();

let sum=function(a,b){
    return a*b;
}

console.log(sum(5,2));