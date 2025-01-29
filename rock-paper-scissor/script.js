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
        choiceBtns.forEach(btn => {
            btn.computedStyleMap.pointerEvents = "none"
        })

        gameTitle.textContent = "Let's Play!"

        playerChoiceText.textContent = "✊"
        cpuChoiceText.textContent = "✊"

        playerResultValue = choiceBtn.value
        cpuResultValue = getCpuResultValue()

        playerChoiceText.classList.add("player-choice-text-anim")
        cpuChoiceText.classList.add("cpu-choice-text-anim")

        setTimeout(() => {
            playerChoiceText.textContent = choiceEmoji[playerResultValue]
            cpuChoiceText.textContent = choiceEmoji[cpuResultValue]

            playerChoiceText.classList.remove("player-choice-text-anim")
            cpuChoiceText.classList.remove("cpu-choice-text-anim")

            showResultGame()

            choiceBtns.forEach(btn => {
                btn.computedStyleMap.pointerEvents = "visible"
            })
        },2000)
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
        scoreDrawText.textContent++
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
        gameTitle.textContent = "You Won! 🥳"
        scoreWonText.textContent++
    } else {
        gameTitle.textContent = "You Lose! 😭"
        scoreLostText.textContent++
    }
}