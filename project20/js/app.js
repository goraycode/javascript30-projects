const words = document.querySelector('.words');
const micro = document.querySelector('#micro');
const newImg = 'img/microfono.png';
const oldImg = 'img/withoutMicro.png';


function writeWords() {
    const speechRecognition = webkitSpeechRecognition;
    const recognition = new speechRecognition();

    recognition.start();
    recognition.onstart = function (e) {
        words.textContent = 'Escuchando...';
        micro.children[0].src = newImg;
    }

    recognition.onspeechend = function () {
        micro.children[0].src = oldImg;
        recognition.stop();
    }

    recognition.onresult = function (e) {

        const { confidence, transcript } = e.results[0][0];
        console.log(confidence, transcript);
        words.textContent = transcript;
    }
}


micro.addEventListener('click', writeWords);