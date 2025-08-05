var btn2 = document.querySelector("#btn2");
var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");

btn2.addEventListener("click", () => {
    console.log("Swapping images...");

    var temp = img1.src;  // Store img1's source temporarily
    img1.src = img2.src;  // Swap img1's source with img2's
    img2.src = temp;      // Swap img2's source with stored img1's source
});
