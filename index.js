let homeScore = document.getElementById("homeScore")
let homescore = 0

function plus1() {
    homescore += 1
    homeScore.textContent = homescore ;
}

function plus2() {
    homescore += 2
    homeScore.textContent = homescore ;
}

function plus3() {
    homescore += 3
    homeScore.textContent = homescore ;
}

let guestScore = document.getElementById("guestScore")
let gscore = 0

function Plus1() {
    gscore += 1
    guestScore.textContent = gscore ;
}

function Plus2() {
    gscore += 2
    guestScore.textContent = gscore ;
}

function Plus3() {
    gscore += 3
    guestScore.textContent = gscore ;
}

function restart() {
    gscore = 0
    guestScore.textContent = 0
    homescore = 0
    homeScore.textContent = 0 
}
