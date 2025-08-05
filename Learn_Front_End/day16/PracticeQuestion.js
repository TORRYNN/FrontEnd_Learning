// Question1
// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3] 
let num = 2
for(n of arr){
    if(arr[n]==num){
       arr.splice(n,1);
    }
}

console.log(arr);

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6
num=287152;
console.log(num);
let count=0;

while(num>0){
count++;
num=Math.floor(num/10);
}
console.log(count);

// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

num = 287152;
let sum=0;
while(num>0){
    let rem=num%10;
    sum+=rem;
    num=Math.floor(num/10);
}
console.log(sum);

// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]

let factorial=1;
let n1=5;

for(let i=1;i<=n1;i++){
    factorial*=i;
}

console.log(factorial);

// Find the largest number in an array with only positive numbers.
let arrr=[2,5,10,4,2,7,1,9];
let largest=0;

for(let i=0;i<=arrr.length;i++){
    if(largest<arrr[i]){
       largest=arrr[i];
       
    }
}
console.log(largest)