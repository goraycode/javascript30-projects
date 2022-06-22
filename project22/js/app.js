const triggers = document.querySelectorAll('a');
const highLight = document.querySelector('.highlight');

function highlighLink() {
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX,
    }

    highLight.style.width = `${coords.width}px`;
    highLight.style.height = `${coords.height}px`;
    highLight.style.transform = `translate(${coords.left}px , ${coords.top}px)`;

}

triggers.forEach(t => {
    t.addEventListener('mouseenter', highlighLink);
});