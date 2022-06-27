const background = document.querySelector('.dropdownBackground');
const triggers = document.querySelectorAll('.top > li');
const nav = document.querySelector('.top');


function handleEnter() {
    this.children[1].classList.add('showInfo');
}

function handleLeave() {
    this.children[1].classList.remove('showInfo')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));