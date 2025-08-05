let gameSeq=[];
let userSeq=[];

let isStarted=false;
let level=0;
let btns=["one", "two", "three", "four"];
const sounds = {
    one: document.getElementById('sound-one'),
    two: document.getElementById('sound-two'),
    three: document.getElementById('sound-three'),
    four: document.getElementById('sound-four')
};

let highScore=0;

// Get the modal and button
const modal = document.getElementById('help-modal');
const btn1 = document.querySelector('.help-button');
const closeBtn = document.querySelector('.close-btn');

// When the user clicks the help button, open the modal
btn1.addEventListener('click', () => {
    event.stopPropagation();
    modal.style.display = 'block';
});

// When the user clicks the close button, close the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside the modal, close the modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

 
let h3=document.querySelector("h3");

// Add new audio elements for start and end sounds
const gameStartSound = document.getElementById('game-start-sound');
const gameEndSound = document.getElementById('game-end-sound');

// Play game start sound
function playGameStartSound() {
    gameStartSound.currentTime = 0; // Reset sound to the beginning
    gameStartSound.play(); // Play the sound
}

// Play game end sound
function playGameEndSound() {
    gameEndSound.currentTime = 0; // Reset sound to the beginning
    gameEndSound.play(); // Play the sound
}
// Event Listener to check if key is pressed
const startGame = () => {
    if (!isStarted) {
        console.log("game is started");
        isStarted = true;
        playGameStartSound();
        setTimeout(levelUp,1000);

    }
};

let mob=document.querySelector('#mobile');
document.addEventListener('keypress', startGame);
mob.addEventListener('click', startGame);


// Function to play sound
// Function to play sound
function playSound(btnId) {
    const sound = sounds[btnId];
    if (sound) {
        sound.currentTime = 0; // Reset sound to the beginning
        sound.play(); // Play the sound
    }
}


function btnflash(btn){
    console.log('flash');
    btn.classList.add('flash');
    playSound(btn.id);
    setTimeout(() => {
        btn.classList.remove('flash');
    }, 400);
}
function userflash(btn){
    btn.classList.add('user-flash');
    playSound(btn.id);
    setTimeout(() => {
        btn.classList.remove('user-flash');
    }, 400);
}


function wrongclick(btn){
    btn.classList.add('wrong-click');
    playSound(btn.id);
    
}

const levelUp = () =>{
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*4);
    let randColor=btns[randIndx];
    let randbtn=document.querySelector(`#${randColor}`)

    gameSeq.push(randColor);
    console.log(gameSeq);
    btnflash(randbtn);

}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length) {
            setTimeout(levelUp,1000);
        }
         console.log("same value");
    }
    else{
        const btn = document.querySelector(`#${userSeq[idx]}`);
        btn.classList.add('wrong-click');
        setTimeout(()=>{
        btn.classList.remove('wrong-click');

        },500);
         playSound(btn.id);
        h3.innerHTML=`Game Over ! Your score was <b>${level}</b> <br> Press Any Key to Start.`;
        
        playGameEndSound();
        updateHighScore();
        setTimeout(resetGame,4000);


    }
}

function btnpress() {
    if (!isStarted) {
        // Ignore button presses if the game hasn't started yet
        console.log("Game hasn't started yet. Ignoring button press.");
        return;
    }
    let btn=this;
    userflash(btn);
    userColor=btn.id; 
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length -1);

}

let allbtns=document.querySelectorAll(".btn");

for( btn of allbtns) {
    btn.addEventListener("click",btnpress);
}

// Function to store HighScore
function updateHighScore() {
    if (level > highScore) {
        highScore = level; // Update high score
        console.log(`New High Score: ${highScore}`);
        localStorage.setItem("highScore", highScore); // Save to localStorage
    }

    // Update the high score display
    const highScoreDisplay = document.querySelector("#high-score");
    if (highScoreDisplay) {
        highScoreDisplay.innerText = `High Score: ${highScore}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    highScore = localStorage.getItem("highScore") || 0;
    const highScoreDisplay = document.querySelector("#high-score");
    if (highScoreDisplay) {
        highScoreDisplay.innerText = `High Score: ${highScore}`;
    }
});


// Reset Game

function resetGame() {
    isStarted=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}




