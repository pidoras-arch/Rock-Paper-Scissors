const choices = ["rock", "paper", "scissors"];
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
    let result;
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
    return result;
}

function userWin(){
    announce.style.backgroundColor = "green";
    announce.textContent = "BINGO!";
    userScore.textContent = parseInt(userScore.textContent) + 1;
}
function computerWin(){
    announce.style.backgroundColor = "red";
    announce.textContent = "Hard luck :(";
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
}
function tie(){
    announce.style.backgroundColor = "yellow";
    announce.textContent = "Tie :3";
}

function playAgain(){
    const decision = confirm(`Your score : ${userScore}\nComputer score : ${computerScore}\nDo you want to play again ? :3`);
    if (decision){
        return(announcement());
    }
}