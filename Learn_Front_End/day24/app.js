
function multipleGreet(func,n){
    for(let i=0;i<n;i++){
        func()
    }
}
let greet=function(){
    console.log("hello world");


}
     
multipleGreet(greet,2)


function OddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("wrong request")
    }
}

// Get the function to test for odd numbers
let oddTest = OddEvenTest("odd");
oddTest(3); // true (3 is odd)
oddTest(4); // false (4 is not odd)

// Get the function to test for even numbers
let evenTest = OddEvenTest("even");
evenTest(3); // false (3 is not even)
evenTest(4); // true (4 is even)

// Handle invalid input
OddEvenTest("prime"); // "wrong request"


