const panels = document.querySelectorAll('.panel');

const panel = document.querySelector('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        addClass(panel);
    });
});

function addClass(p) {
    p.classList.toggle('panel__effect');
}