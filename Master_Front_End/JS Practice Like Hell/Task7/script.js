var prg = document.querySelector("#progress");
var h3 = document.querySelector("h3");
var count = 0;

var progress = setInterval(() => {

    if (count <= 100) {
        count++;
        prg.style.width = count + '%';
    } else {
        h3.style.display="block";

        clearInterval(progress); // Stop the interval when count reaches 100
        setTimeout(()=>{
            count=0;
        },1000)
    }
}, 30);

