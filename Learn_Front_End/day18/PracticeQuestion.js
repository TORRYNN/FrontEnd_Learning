// Question 1: Write a JavaScript function that returns array elements larger than a number.
let arr=[8,9,10,1,2,3,4,5,6,7];

let num=5;

function getElements(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }

}

(getElements(arr,num));

// Question 2: Write a JavaScript function to extract unique characters from a string 

let str="abcdabcdefgggh";

function getUnique(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        let curr=str[i];

        if(ans.indexOf(curr)==-1){
            ans+=curr;
        }
    }
    return ans;
}

console.log(getUnique(str))

// Question 3: Write a JavaScript function to count the number of vowels in a string argument.
let country = ["Australia", "Germany", "United States of America","abcdefghijklmnopqrstuvwxyz"];

function cont(country){
    let longest=0;
    for(let i=0;i<country.length;i++){
        if(country[i].length>longest){
            longest=country[i].length;
        }
    }
    return longest;
}

console.log(cont(country))

// Question 4: Write a JavaScript function to count the number of vowels in a String argument.
let str1 = "apnacollege";

function count(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
            count++;
        }
    }
    return count;
}

console.log(count(str1))

// Question 5: Write a JavaScript Function to generate a random number with in a range of (start ,end)

let start=5;
let end=12;

function ran(start,end){
    let dif=end-start;
    return (Math.floor(Math.random()*dif))+start;
}

console.log(ran(start,end))