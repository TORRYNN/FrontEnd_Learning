var home = document.querySelector("#home");
var about = document.querySelector("#about");
var career = document.querySelector("#career");

var hometext = document.querySelector("#hometext");
var abouttext = document.querySelector("#abouttext");
var careertext = document.querySelector("#careertext");

// Initially show only hometext
abouttext.style.display = "none";
careertext.style.display = "none";

home.addEventListener("click", () => {
    contenthatao();
    hometext.style.display = "block";
});

about.addEventListener("click", () => {
    contenthatao();
    console.log("hello");
    abouttext.style.display = "block";
});

career.addEventListener("click", () => {
    contenthatao();
    careertext.style.display = "block";
});

function contenthatao() {
    document.querySelectorAll("#hometext, #abouttext, #careertext").forEach((element) => {
        element.style.display = "none";
    });
}
