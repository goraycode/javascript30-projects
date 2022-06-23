const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const form = document.querySelector('.container');

function populateVoices() {
    voices = this.getVoices();
    voices.forEach(voice => {
        const { name } = voice;
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        voicesDropdown.appendChild(opt);
    });
}

function setVoice(e) {
    const chooseVoice = e.target.value;
    msg.voice = voices.find(voice => voice.name === chooseVoice);
}

function speakNow() {
    const valueText = options[2].value;
    //validate
    if (valueText === '' || voicesDropdown.value === '') {
        messageError('Fill out fields');
        return;
    }

    msg.text = valueText;

    console.log(msg)
    /* speechSynthesis.speak(msg); */
}

function messageError(message) {
    const divMessage = document.createElement('div');
    divMessage.classList.add('error');
    const pText = document.createElement('p');
    pText.textContent = message;
    divMessage.appendChild(pText);


    const getDiv = document.querySelector('.error');
    if (getDiv !== null) {
        getDiv.remove();
    }

    form.appendChild(divMessage);

    setTimeout(() => {
        divMessage.remove();
    }, 2000);


}


//get differents voices
speechSynthesis.addEventListener('voiceschanged', populateVoices);

voicesDropdown.addEventListener('change', setVoice);
speakButton.addEventListener('click', speakNow);