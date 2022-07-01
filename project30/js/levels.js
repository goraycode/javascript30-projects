import { btnStart } from "./app.js";

const score = document.querySelector('.score');

export function initLevel() {
    score.textContent = '0';
    btnStart.textContent = 'Next level';
    btnStart.classList.remove('hidden');
    btnStart.classList.add('animationbtn');
}


export function level2() {
    document.body.classList.add('level2');
}

export function level3() {
    document.body.classList.add('level3');
}


export function winner() {
    Swal.fire({
        title: 'Congratulations, You win!!!',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
    })
}