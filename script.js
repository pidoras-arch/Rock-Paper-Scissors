const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

function askForChoice(){
    let choice = prompt("Enter your choice 'paper, rock, or scissors'").toLowerCase();
    if (!choices.includes(choice)){
        alert("invalid input, try again");
        return askForChoice();
    }
    return choice;
}

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}


function determineWinner(){
    let result;
    let userchoice = askForChoice();
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

function announcement(){
    let result = determineWinner();
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