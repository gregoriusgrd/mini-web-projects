const choiceBtns = document.querySelectorAll(".choice-btn")

const playerChoiceText = document.querySelector(".player-choice-text")
const cpuChoiceText = document.querySelector(".cpu-choice-text")

const scoreWonText = document.querySelector(".score-won-text")
const scoreDrawText = document.querySelector(".score-draw-text")
const scoreLostText = document.querySelector(".score-lost-text")

const gameTitle = document.querySelector(".game-title")

let playerResultValue = ""
let cpuResultValue = ""

const choiceEmoji = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
}

choiceBtns.forEach((choiceBtn) => {
    choiceBtn.addEventListener("click", () => {
        playerResultValue = choiceBtn.value
        cpuResultValue = getCpuResultValue()

        playerChoiceText.textContent = choiceEmoji[playerResultValue]
        cpuChoiceText.textContent = choiceEmoji[cpuResultValue]

        showResultGame()
    })
})

// Computer choice
function getCpuResultValue() {
    const cpuOptionChoices = ["rock", "paper", "scissors"]

    const cpuRandomChoice = cpuOptionChoices[Math.floor(Math.random() * cpuOptionChoices.length)]
    return cpuRandomChoice
}

function showResultGame() {
    if (playerResultValue == cpuResultValue) {
        gameTitle.textContent = "Draw!"
    } else if (
        playerResultValue == "rock" &&
        cpuResultValue == "scissors"
        ||
        playerResultValue == "paper" &&
        cpuResultValue == "rock"
        ||
        playerResultValue == "scissors" &&
        cpuResultValue == "paper"
    ) {
        gameTitle.textContent = "You Won!"
    } else {
        gameTitle.textContent = "You Lost!"
    }
}