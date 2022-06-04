const img = document.querySelector('.img');
const beach = document.querySelector('.beach');
const titleJS = document.querySelector('.title__lyrics');


function eventListeners() {

    const spacing = document.querySelector('#spacing');
    spacing.addEventListener('change', () => {
        img.style.borderWidth = `${spacing.value}px`;
    });

    const blur = document.querySelector('#blur');
    blur.addEventListener('change', () => {
        beach.style.filter = `blur(${blur.value}px)`;
    })

    const color = document.querySelector('#color');
    color.addEventListener('change', () => {
        img.style.borderColor = `${color.value}`;
        titleJS.style.color = `${color.value}`;
    })
}
eventListeners();