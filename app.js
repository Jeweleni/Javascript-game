const computerChoiceDisplay = document.getElementById("computer-choice")
const playerChoiceDisplay = document.getElementById("player-choice")
const resultDisplay = document.getElementById("result")

const possibleChoices = document.querySelectorAll("button")

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id 
    playerChoiceDisplay.innerHTML = playerChoice

    generateComputerChoice()
    getResult()
})) 

function generateComputerChoice() {
    const randomNumber = Math.floor( Math.random() * 3 ) +1
    //  or you can use possibleChoices,length

    if (randomNumber ===1) {
        computerChoice ="rock"
    }

    if (randomNumber ===2) {
        computerChoice ="paper"
    }

    if (randomNumber ===3) {
        computerChoice ="scissors"
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === playerChoice) {
        result = "its a draw!"
    }

    if (computerChoice === "rock" && playerChoice === "paper") {
        result = "you win!"
    }

    if (computerChoice === "rock" && playerChoice === "scissors") {
        result = "you lost!"
    }

    if (computerChoice === "paper" && playerChoice === "scissors") {
        result = "you win!"
    }

    if (computerChoice === "paper" && playerChoice === "rock") {
        result = "you loose!"
    }

    if (computerChoice === "scissors" && playerChoice === "paper") {
        result = "you win!"
    }

    resultDisplay.innerHTML = result
}