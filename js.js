let playerScore = 0
let compScore = 0


const computerPlay = () => {
    const arrOfChoices = ['rock' , 'paper' , 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}


const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied! You both picked rock.'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied! You both picked scissors.'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied! You both picked paper.'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You won! Rock smooshes scissors!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You lost! Paper covers rock.'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You won! Paper covers rock.'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return 'You lost! Scissors cut paper.'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You won! Scissors cut paper.'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        return 'You lost! Rock smooshes scissors.'
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose your character', 'Rock, Paper, Scissors').toLowerCase()
        const computerSelection = computerPlay()
        console.log('1 ', playRound(playerSelection, computerSelection))
    }  


    if (playerScore > compScore) {
        return 'You beat the computer! Nice Work!'
    } else if (playerScore < compScore) {
        return 'The computer beat you. Shameful.'
    } else {
        return 'You tied, which is like losing.'
    }
}

console.log(game())
