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
    console.log("Player chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);
    
    if(humanChoice===computerChoice) {
        return console.log("Draw! No one wins");
    }

    if(humanChoice === 'Rock' && computerChoice === 'Scissors' ||
        humanChoice === 'Paper' && computerChoice === 'Rock' ||
        humanChoice === 'Scissors' && computerChoice === 'Paper') {

            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    
    console.log("SCORES:\nHuman: " + humanScore + "\nComputer: " + computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

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