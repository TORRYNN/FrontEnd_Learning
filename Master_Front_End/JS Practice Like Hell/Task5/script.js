let h3 = document.querySelector("h3");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let count = 0;
let intervalId = null; // Stores the interval ID

start.addEventListener("click", () => {
    if (intervalId === null) {  // Prevent multiple intervals
        intervalId = setInterval(() => {
            h3.innerText = count;
            count++;
        }, 1000);
    }
});

stop.addEventListener("click", () => {
    clearInterval(intervalId); // Stop the counter
    intervalId = null; // Reset interval ID to allow restarting
});

reset.addEventListener("click", () => {
    clearInterval(intervalId); // Stop the counter
    intervalId = null; // Reset interval ID
    count = 0; // Reset count
    h3.innerText = count; // Update display
});
