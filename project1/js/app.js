window.addEventListener('keydown', keyboard);

function keyboard(e) {
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.play();
}