const choiceBtns = document.querySelectorAll('.choice-btn')

const playerChoiceText = document.querySelector('player-choice-text')

let playerResultValue = ""
let cpuResultValue = ""

choiceBtns.forEach((choiceBtn) => {
    choiceBtn.addEventListener("click", () => {
        playerResultValue = choiceBtn.value
        cpuResultValue = getCpuResultValue()

    })
})

// Computer choice
function getCpuResultValue() {
    const cpuOptionChoices = ["rock", "paper", "scissors"]

    const cpuRandomChoice = cpuOptionChoices[Math.floor(Math.random() * cpuOptionChoices.length)]
    return cpuRandomChoice
}