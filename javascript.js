let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".container");
const results = document.querySelector(".results");

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

rockBtn.addEventListener("click", () => handleClick("Rock"));
paperBtn.addEventListener("click", () => handleClick("Paper"));
scissorsBtn.addEventListener("click", () => handleClick("Scissors"));

// handle click
function handleClick(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    updateScore();

    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

// gets a random int and uses it to make a selection
function getComputerChoice() {
    let computerChoice;

    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(3);

    let int = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    if (int == 0) {
        computerChoice = "Rock";
    }
    else if (int == 2) {
        computerChoice = "Scissors";
    }
    else {
        computerChoice = "Paper";
    }

    return computerChoice;
}

// logic for playing a round
function playRound(humanChoice, computerChoice) {
    let message = ""

    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        message = "You win! Rock beats scissors.";
        humanScore++;
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        message = "You win! Paper beats rock.";
        humanScore++;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        message = "You win! Scissors beats paper.";
        humanScore++;
    }
    else if (humanChoice == computerChoice) {
        message = "It's a tie!";
    }
    else {
        message = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    results.textContent = message;
}


function updateScore() {
    const score = document.createElement("div");
    score.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
    results.appendChild(score);
}

function declareWinner() {
    const winner = document.createElement("div");
    
    if (humanScore > computerScore) {
        winner.textContent = "🎉You win!🎉"
    }
    else {
        winner.textContent = "😔You Lose!😔"
    }
    results.appendChild(winner);
}