const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelector('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;


function populateVoices() {
    const voices = this.getVoices();
    voices.forEach(voice => {
        const { name } = voice;
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        voicesDropdown.appendChild(opt);
    });
}


//get differents voices
speechSynthesis.addEventListener('voiceschanged', populateVoices);