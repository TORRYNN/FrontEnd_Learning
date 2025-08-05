// Question : Create a traffic light system that shows what to  do based on color.

// Colors array
let colors= ["red", "yellow", "green"];

let color= colors[Math.floor(Math.random()*colors.length)];
console.log(color);

if(color=='red'){
    console.log("Stop");
}
else if(color=='yellow'){
    console.log("Ready");
}
else{
    console.log("Go");

}