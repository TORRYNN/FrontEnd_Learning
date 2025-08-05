// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]

let arr=[7,9,0,-2];
let n=3
let ans=arr.slice(0,n);
console.log(ans);

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [9, 0, -2]

console.log(arr.slice(-n))

// Qs3. Write a JavaScript program to check whether a string is blank or not.
let  str="";
if(str.length==0){
    console.log(  "Empty")}

else{
    console.log(  "Not")
}

// Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case.
let str1="  Pratham Chauhan  ";

if(str1.charAt(5)==str1.charAt(5).toLowerCase()){
    console.log(  "True");
}
else{
    console.log(  "False");
}
// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

console.log(str1.trim());

// Qs6. Write a JavaScript program to check if an element exists in an array or not
console.log(arr.includes(9));