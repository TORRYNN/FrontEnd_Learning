// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Data fetched");
//             resolve(10); // Simulating fetched data
//         }, 1000);
//     });
// }

// function processData(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Data processed:", data * 2);
//             resolve(data * 2); // Simulating processed data
//         }, 1000);
//     });
// }

// function saveData(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Data saved:", data);
//             resolve();
//         }, 1000);
//     });
// }

// // Chaining Promises
// fetchData()
//     .then((data) => processData(data)) // Pass fetched data to processData
//     .then((processedData) => saveData(processedData)) // Pass processed data to saveData
//     .then(() => {
//         console.log("All tasks completed");
//     })
//     .catch((error) => {
//         console.error("An error occurred:", error);
//     });

const cart = ["shoe","kurta"];
createOrder(cart).then(function(orderId) {
        console.log(orderId);
        return orderId;
    
    })
    .catch(function(error) {
        console.log(error.message);
    })
    .then(function(orderId) {
        return proceedtoPayment(orderId);
    })
    .then(function(payment) {
        console.log(payment);
    })



function createOrder(cart){
        const pr= new Promise( function (resolve, reject) {
            if(!validateCart(cart)){
                const err=new Error("Cart not valid");
                reject(err);


            }
            const orderId="12345";
            if(orderId){
                resolve(orderId);
            }
        })
        return pr;
    }


    function proceedtoPayment(orderId){
        return new Promise(function (resolve){
            resolve("Payment Successful");
        })
    }
function validateCart(cart){
    return false;
}