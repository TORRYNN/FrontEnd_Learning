// Question1: Write an arrow function named arrayAverage that accepts an array of numbers and return the average of those numbers.

const arrayAverage=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
            sum+=arr[i];
    }
    return (sum/arr.length);
}

console.log(arrayAverage([2,3,4,5,6]))

// Question 2: Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

const isEven=a=>{
    if(a%2==0){
        console.log("Even");
    }
    else{
        console.log("False");
        
    }
}

console.log(isEven(6))

const object={
    message: 'Hello,World!',
    logMessage(){
        console.log(this.message);
    }

};

setTimeout(object.logMessage,1000);