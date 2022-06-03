window.addEventListener('keydown', keyboard);

function keyboard(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);
    if (!audio) return;


    console.log(audio.play());
    box.classList.add('box__effect');

}