import { showBtn } from "./level2.js";

//variables
export const holes = document.querySelectorAll('.hole');
export const score = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
export const btnStart = document.querySelector('.btnstart');
let lastHole;
let sum = 0;
let upmole;


export function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

export function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
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
    btnStart.classList.add('hidden');
    const time = randomTime(1000, 2000);
    upmole = setInterval(() => {
        peep();
    }, time);
}



function sumScore(e) {

    if (!e.isTrusted) return;
    sum++;

    score.textContent = sum;
    this.classList.remove('showmole');
    if (sum === 5) {

        clearInterval(upmole);
        sum = 0;
        showBtn();


    }
}


//events
moles.forEach(mole => {
    mole.addEventListener('click', sumScore);
});


btnStart.addEventListener('click', loadPeed);