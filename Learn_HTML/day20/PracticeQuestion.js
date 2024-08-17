// Question 1: Square and sum the array elements using the arrow function and then find the average of the array.

let arr= [1,2,3,4,5];
let sum=arr.reduce((sum,elem)=>(
     sum+(elem*elem)

))

console.log(sum);
let avg=sum/arr.length;

console.log(avg);

// Question 2: Create a new array using the map function whose each element is equal to the original element plus 5.
let ar=arr.map((el)=>{
    return el+5;
})

console.log(ar);

// Question 3: Create a new array whose elements are in uppercase of words present in the orginal array.

let words=["pratham","chauhan","is" ,"a","good","programmer"];

let upperwords=words.map(el=>{
    return el.toUpperCase();
})

console.log(words);
console.log(upperwords);

// Question 4: Write a function called doubleAndReturnARgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and al of the additional arguments doubled.

let doubleAndReturnARgs=(arr,...args)=>[
    ...arr,...args.map(v=>v*2),
];

console.log(doubleAndReturnARgs(arr,1,2,3,4,5))

// Question 5: Write  a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

let mergeObjects=(obj1,obj2)=>({...obj1,...obj2});

let data1={
    name1:"pratham",
    no1:8,
}
let data2={
    name2:"prathamm",
    no2:89,
}

console.log(mergeObjects(data1,data2))