const choices = ["rock", "paper", "scissors"];
let playArea = document.querySelector(".playArea");
let doIt = document.querySelector(".doIt");
let interface = document.querySelector(".userChoice");
let userScore = document.querySelector("#userScore");
let computerScore = document.querySelector("#computerScore");
let announce = document.querySelector(".result");
let userChoice = document.querySelector(".userChoice");
userChoice.addEventListener("click",(event)=>{
    let target = event.target;
    determineWinner(target.id);
});

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userchoice){
    let computerchoice = computerChoice()
    switch(userchoice){
        case("rock"):
            if (computerchoice === "scissors"){
                userWin();
            } else if (computerchoice === "paper"){
                computerWin();
            } else{
                tie();
            }
            break;
        case("paper"):
            if (computerchoice === "scissors"){
                computerWin();
            } else if (computerchoice === "paper"){
                userWin();
            } else{
                tie();
            }
            break;

        case("scissors"):
            if (computerchoice === "paper"){
                userWin();
            } else if(computerchoice === "rock"){
                computerWin();
            } else{
                tie();
            }
            break;
    }
    if(parseInt(userScore.textContent) + parseInt(computerScore.textContent) == 5){
        result();
    }
}

function userWin(){
    announce.style.border = "solid black"
    announce.style.backgroundColor = "green";
    announce.style.color = "white"
    announce.textContent = "BINGO!";
    userScore.textContent = parseInt(userScore.textContent) + 1;
}
function computerWin(){
    announce.style.border = "solid black"
    announce.style.backgroundColor = "red";
    announce.style.color = "white"
    announce.textContent = "Hard luck :(";
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
}
function tie(){
    announce.style.border = "solid black"
    announce.style.backgroundColor = "yellow";
    announce.style.color = "black"
    announce.textContent = "Tie :3";
}
function result(){
    playArea.removeChild(doIt);
    playArea.removeChild(interface);
    playArea.removeChild(announce);
    const result = document.createElement("div");
    const playAgainButton = document.createElement("button");
    result.classList.add("doIt")
    playAgainButton.textContent = "Play again"
    playArea.appendChild(result);
    playArea.appendChild(playAgainButton);
    playAgainButton.addEventListener("click",()=> playAgain());
    parseInt(userScore.textContent) > parseInt(computerScore.textContent) ?
        result.textContent = "Congrats, You have won the game!"
        : result.textContent = "Unfortunatlly, You have lost the game.";
}

function playAgain(){
    location.reload();
}