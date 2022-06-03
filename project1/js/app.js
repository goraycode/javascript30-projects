window.addEventListener('keydown', keyboard);

function keyboard(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);
    playSoundandEffect(audio, box);
}


function clickBox() {
    const boxes = document.querySelectorAll(`.box`);

    boxes.forEach(box => {
        box.addEventListener('click', (e) => {
            console.log(e.target.attributes[0].value);
            const valueSound = e.target.attributes[0].value
            const audio = document.querySelector(`audio[data-key="${valueSound}"]`);
            playSoundandEffect(audio, box);
        })
    });
}


function playSoundandEffect(audio, box) {
    if (!audio) return;
    audio.currentTime = 0; //rewind to the start
    audio.play();

    box.classList.add('box__effect');
    setTimeout(() => {
        box.classList.remove('box__effect');
    }, 250);
}


clickBox();