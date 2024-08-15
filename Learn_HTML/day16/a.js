const favMovie="Salaar"

let guess=prompt("Guess my Favourite Movie");

while((guess != favMovie) && (guess!="quit")&&(guess!="Quit")&&(guess!="QUIT")){
    guess=prompt("Wrong guess Please try again");
}

if(guess==favMovie){
    alert("Congratulations.")
}