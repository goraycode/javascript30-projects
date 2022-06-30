//variables
const holes = document.querySelectorAll('.hole');
const score = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;


function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.round(Math.random() * holes.length);
    const hole = holes[idx];
    //not same hole
    if (hole === lastHole) {
        return randomHole(holes);

    }

    lastHole = hole;

    return hole;

}


function peep() {
    const time = randomTime(1000, 2000);
    const hole = randomHole(holes);
    hole.children[0].classList.add('showmole');

    setTimeout(() => {
        hole.children[0].classList.remove('showmole');
    }, time);
}


function loadPeed() {
    const time = randomTime(1000, 2000);
    setInterval(() => {
        peep();
    }, time);
}

function sumScore() {
    
}


//events
document.addEventListener('DOMContentLoaded', loadPeed);
moles.forEach(mole => {
    mole.addEventListener('click', sumScore);
});
