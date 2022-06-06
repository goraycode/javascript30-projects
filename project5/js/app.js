const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        addClass(panel);
    });
});

function addClass(p) {
    p.classList.toggle('panel__effect');
    p.children[0].classList.toggle('downUp');
    p.children[1].classList.toggle('growUp');
    p.children[2].classList.toggle('downUp');
}