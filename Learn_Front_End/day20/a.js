// foreach

// One way
let arr=[1,2,3,4,5];

let print=function(el){
    console.log(el);
}; 

arr.forEach(print);

// Another Way
arr.forEach(function(el){
    console.log(el);
})

// Using Arrow Function

arr.forEach((el)=>{
    console.log(el);

})

// - - - - - - - - - - - - - - - - - - - - -
//  Map()

let sq=arr.map((el)=>{
    return el*2;
})

console.log(sq);

let even= arr.filter((el=>{return el%2==0}))

console.log(even);

let a= arr.every(el=>el%2==0);
console.log(a);

// reduce()

let b=arr.reduce((res,a)=>{
    console.log(res);
    return res+a;
})

console.log(b);

// Find maximum in Array

let max=arr.reduce((max,el)=>{
    if(el>max){
        return el;
    }
    else{
        return max;
    }
})

console.log(max)

// Question: Check if all numbers in our array are multipe of 10 or not.
let ar=[10,20,30,404];

let isten=ar.every(num=>{
    return num%10==0;
})

console.log(isten)

// Question: Create a functio to find the min number in an array.

let min=arr.reduce((min,num)=>{
    if(num<min){
        return num;
    }else{
        return min;
    }
})

console.log(min);

console.log(Math.max(...arr));

let data={
    name:"pratham",
    no:8
}

let datacopy=data;

function print(...args){
    args.forEach(elm => {
        console.log(`Element ${elm}`)
    });
}

print(1,2,4,5,6,6,7);

let student={
    name:"ratan"
}