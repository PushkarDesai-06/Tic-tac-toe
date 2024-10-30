let playArea = document.getElementsByClassName("box")
let winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]
let title = document.querySelector(".title")
let currPlayer = 'X'
let isPaused = false
let currentPlayer = document.querySelector(".currentPlayer span")
let stat = 'ongoing'  //complete, ongoing
let winText = document.querySelector('.winText')

let action = document.querySelector('.action')

let xList = []
let oList = []

console.log(playArea);

let changePlayer = () => {
    currPlayer === 'X' ? currPlayer = 'O' : currPlayer = 'X'

}

let checkWin = (list) => {

    return winningConditions.some((arr) => arr.every((index) => list.includes(index)))

}

let isEmpty = (box) => box.innerText === ''


for (let i = 0; i < playArea.length; i++) {

    playArea[i].addEventListener("click", () => {

        if (isEmpty(playArea[i]) && !isPaused) {

            playArea[i].innerText = currPlayer
            currentPlayer.innerText = currPlayer == 'X' ? 'O' : 'X'

            let playerList = currPlayer == 'X' ? xList : oList

            playerList.push(i)
            playerList.sort()
            console.log(playerList);

            if (checkWin(playerList)) {

                // alert(`${currPlayer} WON!!`)
                stat = 'complete'

                action.style.visibility = 'visible'
                winText.innerText = `${currPlayer} WON!!`
                isPaused = true
            }
            else if (xList.length + oList.length == 9) {

                // alert('Its a Draw : |')
                stat = 'complete'
                isPaused = true
                action.style.visibility = 'visible'
                winText.innerText = 'Its a Draw : |'
            }
            else {
                changePlayer()
            }
        }


    })


}

let restart = document.querySelector(".restart")
let restartAct = document.querySelector(".restart.act")


restart.addEventListener("click", () => {
    for (let i = 0; i < playArea.length; i++) {
        playArea[i].innerText = ''
        currPlayer = 'X'
        xList = []
        oList = []
        currentPlayer.innerText = 'X'
        action.style.visibility = 'hidden'
        isPaused = false
    }
})
restartAct.addEventListener("click", () => {
    for (let i = 0; i < playArea.length; i++) {
        playArea[i].innerText = ''
        currPlayer = 'X'
        xList = []
        oList = []
        currentPlayer.innerText = 'X'
        action.style.visibility = 'hidden'
        isPaused = false
    }
})
