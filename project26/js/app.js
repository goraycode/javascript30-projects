const background = document.querySelector('.dropdownBackground');
const triggers = document.querySelectorAll('.top > li');
const nav = document.querySelector('.top');

function handleEnter() {
    background.style.display = 'block';
    this.children[1].classList.add('showInfo');
    const position = this.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
        top: position.top - navCoords.top + 40,
        left: position.left + navCoords.left
    }
    console.log(position, coords.left)
    background.style.transform = `translate(${coords.left}px , ${coords.top}px)`;
}

function handleLeave() {
    background.style.display = 'none';
    this.children[1].classList.remove('showInfo')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));