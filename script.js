console.log("Welcome to Rock, Paper, Scissors");
let playerChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

function getHumanChoice()
{
    let choice = null;

    do{
        choice = prompt("Please enter 'Rock', 'Paper', or 'Scissors'.");
        
        if (choice.toLowerCase() === "rock") {
            choice = "Rock";
        } else if (choice.toLowerCase() === "scissors") {
            choice = "Scissors";
        } else if (choice.toLowerCase() === "paper") {
            choice = "Paper";
        } else {
            choice = null;
        }
    }
    while (choice === null);
    
    return choice;
}

function playRound(humanChoice, computerChoice)
{

}

const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

function getComputerChoice()
{
    let choice = Math.random(0,1);

    if(choice <= 0.33)
    {
        computerChoice = "Rock";
    }
    else if (choice > 0.33 && choice <= 0.66)
    {
        computerChoice = "Scissors";
    }
    else 
    {
        computerChoice = "Paper";
    }

    return computerChoice;
}