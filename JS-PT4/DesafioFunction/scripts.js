const resultGame = document.querySelector(".result")
const myScoreCount = document.querySelector("#span1")
const iaScoringCount = document.querySelector("#span2")


let myScoreNumber = 0
let iaScoreNumber = 0

const JokenPo = (myChoice) => {
    startGame(myChoice, JokenPoIA())

}

const JokenPoIA = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)

    return (choices[randomNumber])

}

const startGame = (iChose, AIchose) => {
    console.log("Eu escolho : " + iChose, "IA escolheu : " + AIchose)


    if (iChose === AIchose) {
        resultGame.innerHTML = "Jogo Empatado 🙄​​​ "
        resultGame.style.color = "blue"
    }
    else if (iChose === "rock" && AIchose === "scissors" ||
        iChose === "scissors" && AIchose === "paper" ||
        iChose === "paper" && AIchose === "rock") {

        resultGame.innerHTML = "Ganhei , toma IA 😙​ "

        resultGame.style.color = "green"

        while (true) {
            myScoreNumber++;
            myScoreCount.innerHTML = myScoreNumber
            break
        }

    }
    else {
        resultGame.innerHTML = "Voce perdeu feio ​😔​"

        resultGame.style.color = "purple"

        while (true) {
            iaScoreNumber++;
            iaScoringCount.innerHTML = iaScoreNumber
            break
        }
    }
}

