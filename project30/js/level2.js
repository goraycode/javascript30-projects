import { score, btnStart, holes, randomHole, randomTime } from "./app.js";

let upmole;
export function showBtn() {
    score.textContent = '0';
    btnStart.textContent = 'Next level';
    btnStart.classList.remove('hidden');
    btnStart.classList.add('animationbtn');

    if (btnStart.classList.contains('animationbtn')) {
        btnStart.addEventListener('click', nextLevel2);
    }
}

function level2() {
    document.body.style.backgroundColor = 'red';
    const time = randomTime(3000, 4000);
    const hole = randomHole(holes);
    hole.children[0].classList.add('showmole');

    setTimeout(() => {
        hole.children[0].classList.remove('showmole');
    }, time);

}

function nextLevel2() {
    btnStart.classList.add('hidden');
    const time = randomTime(1000, 2000);
    upmole = setInterval(() => {
        level2();
    }, time);
}