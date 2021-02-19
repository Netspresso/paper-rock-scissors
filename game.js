// Vars:
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: null,
    pcHand: null
}

// handles
const hands = [...document.querySelectorAll('.select img')];
const playBtn = document.querySelector('button.start');
const summary = [...document.querySelectorAll('.panel-left span')];
const results = [...document.querySelectorAll('.panel-right span')];
let nOfGames = 0;
let nOfWins = 0;
let nOfLoss = 0;
let nOfDraws = 0;

// Functions

function handSelection() {
    // Function that change playerHand property of game object by clicking on one img
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px red';
}

function pcChoice() {
    // Function that takes random choice of PC
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult(player, pc) {
    if (player === pc) {
        return "draw";
    } else if ((player === "paper" && pc === "rock") || (player === "rock" && pc === "scissors") || (player === "scissors" && pc === "paper")) {
        return "win";
    } else {
        return "loss";
    }
}

function announceResult(player, pc, result) {
    summary[0].textContent = player;
    summary[1].textContent = pc;
    nOfGames += 1;
    results[0].textContent = nOfGames;
    if (result === "win") {
        summary[2].textContent = "Gracz";
        nOfWins += 1;
        results[1].textContent = nOfWins;
    } else if (result === "draw") {
        summary[2].textContent = "Remis";
        nOfDraws += 1;
        results[2].textContent = nOfDraws;
    } else {
        summary[2].textContent = "Komputer";
        nOfLoss += 1;
        results[3].textContent = nOfLoss;
    }
}


function executeGame() {
    // Function controlling game mechanics
    if (!game.playerHand) {
        // Firstly, let's check if any img is marked
        return alert("Choose one option!!!");
    }
    game.pcHand = pcChoice()
    const gameResult = checkResult(game.playerHand, game.pcHand);
    announceResult(game.playerHand, game.pcHand, gameResult);
}

hands.forEach(hand => hand.addEventListener('click', handSelection));
playBtn.addEventListener('click', executeGame);