console.log("Welcome to Rock, Paper, Scissors");
let playerScore = 0;
let computerScore = 0;
let round = 1;

const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");
const roundNumberLabel = document.querySelector("#round");

const playerScoreLabel = document.querySelector("#playerScore");
const computerScoreLabel = document.querySelector("#computerScore");
const resultList = document.querySelector("#result");
const finalResult = document.querySelector(".result");

//Game Status List Start
let ul = document.querySelector("ul");

let human = document.createElement("li");
let comp = document.createElement("li");
let result = document.createElement("li");
//Game Status List End

human.textContent="Player chooses:";
comp.textContent="Player chooses:";
result.textContent="Result:";

rockButton.addEventListener("click", function(event) {
    playRound(rockButton.id,getComputerChoice())
});
paperButton.addEventListener("click", function(event) {
    playRound(paperButton.id,getComputerChoice())
});
scissorsButton.addEventListener("click", function(event) {
    playRound(scissorsButton.id,getComputerChoice())
});

function updateUI () {
    roundNumberLabel.textContent=round;
    playerScoreLabel.textContent=playerScore;
    computerScoreLabel.textContent=computerScore;
}

updateUI();

function getComputerChoice(){
    let choice = Math.random(0,1);

    if(choice <= 0.33) {computerChoice = "Rock"; }
    else if (choice > 0.33 && choice <= 0.66) { computerChoice = "Scissors"; }
    else {computerChoice = "Paper"; }

    return computerChoice;
}

function playRound(humanChoice, computerChoice)
{
    ul.append(human);
    human.textContent="Player chose: " + humanChoice;

    ul.append(comp);
    comp.textContent="Computer chose: " + computerChoice;

    ul.append(result);
     
    if(humanChoice===computerChoice) {
       
    result.textContent="DRAW! No one wins this round!"

    } else if(humanChoice === 'Rock' && computerChoice === 'Scissors' ||
        humanChoice === 'Paper' && computerChoice === 'Rock' ||
        humanChoice === 'Scissors' && computerChoice === 'Paper') {

            result.textContent="You Win! Player wins this round!"
            playerScore++;
    } else {
        result.textContent="You Lose! Computer wins this round!"
        computerScore++;
    }
    
    round++;
    updateUI();
    scoreCheck();
}

function scoreCheck() {
    if(playerScore < 5 && computerScore < 5){
        return;
    }
    
    let theResult = document.createElement("h1");
    finalResult.append(theResult);

    if(playerScore > computerScore) { 
        theResult.textContent="YOU WIN";
    } else if (computerScore > playerScore) {
        theResult.textContent="YOU LOSE";
    }

    rockButton.disabled=true;
    paperButton.disabled=true;
    scissorsButton.disabled=true;
}