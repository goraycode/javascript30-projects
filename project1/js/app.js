window.addEventListener('keydown', keyboard);

function keyboard(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0; //rewind to the start
    audio.play();

    box.classList.add('box__effect');
    setTimeout(() => {
        box.classList.remove('box__effect');
    }, 1000);
}