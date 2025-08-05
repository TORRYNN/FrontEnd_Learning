
// Q1: Create a number variable num with some value.
// Now, print "good " if the number is divisible by 10 and print "bad" if it is not.

let num=10;

if(num%10==0) {
    console.log("Good");
}
else{
    console.log("Bad");
}

// Qs2: Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert(by substituting their name & age):

// name is age years old.

// let name1=prompt("Enter name");
// let age=prompt("Enter age");

// console.log(`${name1} is ${age} old.`);

switch (3) {
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;

    default:
        console.log("Wrong Input");
        break;
}

let st="a boy jump over a car";

if(st[0]=='a'||st[0]=='A'&& st.length>=5){

    console.log(`Golden String ${st.length}`);
}

let a=5;
let b=6;
let c=7;

if(a>b&&a>c){
    console.log(a);
}
else if(b>a&&b>c){
    console.log(a);
}
else{
    console.log(c);
}  

let num1=32;
let num2=47852;

if(num1%10==num2%10){
    console.log("Numbers have the same last digit which is", num1%10);
}
else{
    console.log("Numbers don't have the same last digit ");
}