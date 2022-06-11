//variables
const playerVideo = document.querySelector('.viewer');
const btnPlay = document.querySelector('.play');
const volume = document.querySelector('#volume');
const backRate = document.querySelector('#backRate');
const skipButtons = document.querySelectorAll('[data-skip]');
const progressFilled = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');



function currProgress() {
    const percent = (playerVideo.currentTime / playerVideo.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}


//functions
function togglePlay() {
    const method = playerVideo.paused ? 'play' : 'pause';
    playerVideo[method]();


    /* 
     another method
    if (playerVideo.paused) {
        playerVideo.play();
    } else {
        playerVideo.pause();
    } */
}

function changeVolume(e) {
    const valueVol = e.target.value;
    playerVideo.volume = valueVol;
}

function updateButton() {
    const valueCurr = this.paused; //true
    const icon = valueCurr ? '⏸' : '▶';
    btnPlay.textContent = icon;
}

function skip() {
    playerVideo.currentTime += parseFloat(this.dataset.skip);
}

function changeRate() {
    playerVideo.playbackRate = this.value;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * playerVideo.duration;
    playerVideo.currentTime = scrubTime;
}

//hook up the event listeners
playerVideo.addEventListener('click', togglePlay);
playerVideo.addEventListener('play', updateButton);
playerVideo.addEventListener('pause', updateButton);
playerVideo.addEventListener('timeupdate', currProgress)


btnPlay.addEventListener('click', () => {
    togglePlay();
})

volume.addEventListener('change', (e) => {
    changeVolume(e);
});

backRate.addEventListener('change', changeRate)


skipButtons.forEach(skipBtn => {
    skipBtn.addEventListener('click', skip);
});

progress.addEventListener('click', scrub);
