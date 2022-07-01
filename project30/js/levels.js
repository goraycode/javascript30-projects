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
        width: 400,
        padding: '3em',
        color: '#211D1E',
        background: '#fff',
        backdrop: `
          rgba(0,0,123,0.4)
          url(./img/congratulations.gif)
          center center
          no-repeat
        `
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    })
}

