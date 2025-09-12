// gets a random integer between min and max (min inclusive, max exclusive)
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

// takes the value from getRandomInt and uses it to make a choice at random
function getComputerChoice(int) {
    let computerChoice;

    if (int == 0) {
        computerChoice = "Rock";
    }
    else if (int == 2) {
        computerChoice = "Scissors";
    }
    else
    {
        computerChoice = "Paper";
    }

    return computerChoice;
}

// takes user input for their choice
function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors.")
    return humanChoice;
}

console.log(getComputerChoice(getRandomInt(0,3)));
console.log(getHumanChoice());