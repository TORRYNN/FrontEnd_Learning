// 🔒 Q1. Closure Basics (Private Counter)
// Create a function createCounter that returns an object with two methods:

// increment() → increases a private variable

// get() → returns its value
// The variable should be unreachable from outside directly.

function createCounter(){
    var count=0;
    return{
        increment:()=>{
            count++;
        },
        get:()=>{
            return count;
        }
    }
}

var counter=createCounter();
counter.increment();
counter.get();