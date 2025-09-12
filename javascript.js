let humanScore = 0;
let computerScore = 0;

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

// takes user input for their choice
function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors.")

    // converts first letter of user input to uppercase and others to lowercase
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
;
}

// logic for playing a round
function playRound(humanChoice, computerChoice) {

    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    }
    else if (humanChoice == computerChoice) {
        console.log("It's a tie!")
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

function playGame() {
        let roundNumber = 1;

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Round ${roundNumber}:`)

        console.log(`You picked ${humanSelection}`);
        console.log(`Computer picked ${computerSelection}`);

        playRound(humanSelection, computerSelection);

        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);

        roundNumber++;
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else {
        console.log("You lose!");
    }

}

playGame();