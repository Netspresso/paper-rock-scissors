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

const hands = [...document.querySelectorAll('.select img')];


// Functions

function handSelection() {
    // Function that change playerHand property of game object by clicking on one img
    game.playerHand = this.dataset.option
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px red';
}

hands.forEach(hand => hand.addEventListener('click', handSelection));