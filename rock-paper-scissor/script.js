const choiceBtns = document.querySelectorAll(".choice-btn")

const playerChoiceText = document.querySelector(".player-choice-text")
const cpuChoiceText = document.querySelector(".cpu-choice-text")

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
    })
})

// Computer choice
function getCpuResultValue() {
    const cpuOptionChoices = ["rock", "paper", "scissors"]

    const cpuRandomChoice = cpuOptionChoices[Math.floor(Math.random() * cpuOptionChoices.length)]
    return cpuRandomChoice
}