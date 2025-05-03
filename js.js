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
    } else    