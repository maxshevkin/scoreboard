let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let countHome = 0
let countGuest = 0

function plusOneHome() {
    countHome += 1
    scoreHome.textContent = countHome
    console.log(scoreHome)
}

function plusTwoHome() {
    countHome += 2
    scoreHome.textContent = countHome
    console.log(scoreHome)
}

function plusThreeHome() {
    countHome += 3
    scoreHome.textContent = countHome
    console.log(scoreHome)
}

// -------------GUEST FUNCTIONS------------------

function plusOneGuest() {
    countGuest += 1
    scoreGuest.textContent = countGuest
    console.log(scoreGuest)
}

function plusTwoGuest() {
    countGuest += 2
    scoreGuest.textContent = countGuest
    console.log(scoreGuest)
}

function plusThreeGuest() {
    countGuest += 3
    scoreGuest.textContent = countGuest
    console.log(scoreGuest)
}
