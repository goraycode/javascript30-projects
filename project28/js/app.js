const video = document.querySelector('.panel__video');
const speed = document.querySelector('#speed');
const text = document.querySelector('.panel__text');

function changeRate() {
    const value = this.value;
    video.playbackRate = value;

    text.textContent = value;
    if (value >= 3) {

        text.style.transform = `translateX(${value * 3.5}rem)`;
    } else {
        text.style.transform = `translateX(${value * 2.2}rem)`;
    }
    setTimeout(() => {
        text.textContent = '';
    }, 2000);
}



speed.addEventListener('change', changeRate);