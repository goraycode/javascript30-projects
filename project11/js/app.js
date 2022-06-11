const playerVideo = document.querySelector('.viewer');
const btnPlay = document.querySelector('.play');
const volume = document.querySelector('#volume');

let counter = 0;
btnPlay.addEventListener('click', () => {
    playerVideo.play();
})

volume.addEventListener('change', (e) => {
    const valueVol = e.target.value;
    playerVideo.volume = valueVol;
})
