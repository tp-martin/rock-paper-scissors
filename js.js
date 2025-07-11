const selections = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay =document.getElementById("playerScoreDisplay")
const computerScoreDisplay =document.getElementById("computerScoreDisplay")
let playerScore = 0;
let computerScore = 0;


function playGame(playerSelection){
    const computerSelection = selections[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerSelection === computerSelection){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerSelection){
            case "rock":
                result = (computerSelection === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerSelection === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerSelection === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        } 
    }

    playerDisplay.textContent = `PLAYER: ${playerSelection}`;
    computerDisplay.textContent = `COMPUTER: ${computerSelection}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");


    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}