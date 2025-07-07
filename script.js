/* 
pseudocode:
- Create a prompt to ask the user for their choice (rock, paper, or scissors)
- Generate a random choice for the computer (rock, paper, or scissors)
- Compare the user's choice with the computer's choice
- Determine the winner based on the rules of rock-paper-scissors
- Display a message telling the user wether he won, lost or tied
- Ask the user if he wants to play again
*/
const choices = ["rock", "paper", "scissors"];

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
        alert("You have won!");
    } else if (result === "lose"){
        alert("You have lost :(")
    } else{
        alert("It's a tie")
    }
}
