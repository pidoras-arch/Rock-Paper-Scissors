const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
let userSelection;

let userChoice = document.querySelector(".userChoice");
userChoice.addEventListener("click",(event)=>{
    let target = event.target;
    announcement(target.id);
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
                result = "win";
            } else if (computerchoice === "paper"){
                result = "lose";
            }
            break;
        case("paper"):
            if (computerchoice === "scissors"){
                result = "lose";
            } else if (computerchoice === "paper"){
                result = "win";
            }
            break;

        case("scissors"):
            if (computerchoice === "paper"){
                result = "win";
            } else if(computerchoice === "rock"){
                result = "lose";
            }
            break;
    }
    return result;
}

function announcement(userchoice){
    let result = determineWinner(userchoice);
    if (result === "win"){
        userScore+=1;
        alert("You have won!");
    } else if (result === "lose"){
        computerScore+=1;
        alert("You have lost :(")
    } else{
        alert("It's a tie")
    }
    playAgain();
}

function playAgain(){
    const decision = confirm(`Your score : ${userScore}\nComputer score : ${computerScore}\nDo you want to play again ? :3`);
    if (decision){
        return(announcement());
    }
}