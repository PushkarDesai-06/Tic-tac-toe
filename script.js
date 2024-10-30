let playArea = document.getElementsByClassName("box")
let winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]
// let winningConditions = ['012', '345', '678', '048', '246', '036', '147', '258']
let title = document.querySelector(".title")
let currPlayer = 'X'
let isPaused = false
let currentPlayer = document.querySelector(".currentPlayer span")

let xList = []
let oList = []

console.log(playArea);

// let doesHave = (list) => {
//     for (const elem of winningConditions) {
//         for (const chr of elem) {
//             for (const ind of list) {
//                 if (ind == chr) {
//                     break
//                 }
//             }
//         }
//     }
//     return false;
// }

let changePlayer = () => {
    currPlayer === 'X' ? currPlayer = 'O' : currPlayer = 'X'

}

let checkWin = (list) => {

    return winningConditions.some((arr) => arr.every((index) => list.includes(index)))

}

let isEmpty = (box) => box.innerText === ''


// playArea[0].addEventListener("click", () => console.log(playArea[0]))

for (let i = 0; i < playArea.length; i++) {

    // console.log(playArea[i])
    playArea[i].addEventListener("click", () => {

        if (isEmpty(playArea[i]) && !isPaused) {

            playArea[i].innerText = currPlayer
            currentPlayer.innerText = currPlayer == 'X' ? 'O' : 'X'

            let playerList = currPlayer == 'X' ? xList : oList

            playerList.push(i)
            playerList.sort()
            console.log(playerList);

            if (checkWin(playerList)) {

                alert(`${currPlayer} WON!!`)

                isPaused = true
            }
            else if (xList.length + oList.length == 9) {

                alert('Its a Draw : |')
                isPaused = true
            }
            else {
                changePlayer()
            }
        }
        // console.info(playArea[i]);

    })


}
