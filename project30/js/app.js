import { initLevel, level2, level3, winner } from "./levels.js";

//variables
const holes = document.querySelectorAll('.hole');
const score = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const levelGame = document.querySelector('.gamelevel');
export const btnStart = document.querySelector('.btnstart');
let lastHole;
let sum = 0;
let currLevel = 0;
let upmole;


function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    //not same hole
    if (hole === lastHole) {
        return randomHole(holes);

    }

    lastHole = hole;

    return hole;

}


function peep(min, max) {
    const time = randomTime(min, max);
    const hole = randomHole(holes);
    hole.children[0].classList.add('showmole');

    setTimeout(() => {
        hole.children[0].classList.remove('showmole');
    }, time);
}




function loadPeed(min, max) {
    btnStart.classList.add('hidden');
    const time = randomTime(min + 1000, max + 1000);
    upmole = setInterval(() => {
        peep(min, max);
    }, time);
}



function sumScore(e) {

    if (!e.isTrusted) return;
    sum++;

    score.textContent = sum;
    this.classList.remove('showmole');
    if (sum === 2 && currLevel === 1) {

        clearInterval(upmole);
        sum = 0;
        initLevel();
    } else if (sum === 3 && currLevel === 2) {
        clearInterval(upmole);
        sum = 0;
        initLevel();
    } else if (sum === 4 && currLevel === 3) {
        clearInterval(upmole);
        sum = 0;
        winner();
    }
}

function sumLevel() {
    currLevel++;
    levelGame.textContent = `Level ${currLevel}`;
    switch (currLevel) {
        case 1:
            loadPeed(2000, 3000);
            break;

        case 2:
            level2();
            loadPeed(1000, 2000);
            break;
        case 3:
            level3();
            loadPeed(500, 1000);
            break;
        default:
            break;
    }

}


//events
moles.forEach(mole => {
    mole.addEventListener('click', sumScore);
});


btnStart.addEventListener('click', sumLevel);