/* 
pseudocode:
- Create a prompt to ask the user for their choice (rock, paper, or scissors)
- Generate a random choice for the computer (rock, paper, or scissors)
- Compare the user's choice with the computer's choice
- Determine the winner based on the rules of rock-paper-scissors
- Display a message telling the user wether he won, lost or tied
- Ask the user if he wants to play again
*/
const choices = ["rock", "paper", "scissors"]

function askForChoice(){
    return prompt("Enter your choice 'paper, rock, or scissors'").toLowerCase;
}

function computerCoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
