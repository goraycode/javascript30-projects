const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');



function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            video.srcObject = localMediaStream;
            video.play();

        }).catch(err => console.error(err));

}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);

        //mess with them
        pixels = redEffect(pixels);
        pixels = greenEffect(pixels);
        pixels = blueEffect(pixels); 


        //pixels = rgbSplit(pixels);

        ctx.globalAlpha = 0.1;

        //pixels = greenScreen(pixels);

        //put them back
        ctx.putImageData(pixels, 0, 0);

    }, 16);


}

function takePhoto() {
    //player the sound
    snap.currentTime = 0;
    snap.play();

    //take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'img')
    link.innerHTML = `<img src="${data}" alt="Taked photo">`;
    strip.insertBefore(link, strip.firstChild);
}


function redEffect(pixels) {
    const rangeRed = document.querySelector('#rmax');
    const valueRed = Number(rangeRed.value) * 10;
    for (let i = 0; i < pixels.data.length; i += 4) {

        pixels.data[i + 0] = pixels.data[i + 0] + valueRed //red

    }
    return pixels;
}

function greenEffect(pixels) {
    const rangeGreen = document.querySelector('#gmax');
    const valueGreen = Number(rangeGreen.value) * 10;
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 1] = pixels.data[i + 1] + valueGreen //green
    }
    return pixels;
}

function blueEffect(pixels) {
    const rangeBlue = document.querySelector('#bmax');
    const valueBlue = Number(rangeBlue.value) * 10;


    for (let i = 0; i < pixels.data.length; i += 4) {

        /* pixels.data[i + 0] = pixels.data[i + 0] * 0.5  //red
        pixels.data[i + 1] = pixels.data[i + 1] - 50 //green */
        pixels.data[i + 2] = pixels.data[i + 2] + valueBlue;//blue
    }
    return pixels;
}


function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {

        pixels.data[i - 100] = pixels.data[i + 0]; //red
        pixels.data[i + 200] = pixels.data[i + 1];//green
        pixels.data[i - 150] = pixels.data[i + 2];//blue
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};

    const inputs = document.querySelectorAll('.control input');

    inputs.forEach(input => {
        levels[input.name] = input.value;

    });


    for (let i = 0; i < pixels.data.length; i += 4) {

        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {

            pixels.data[i + 3] = 0;
        }


    }


    return pixels;
}

getVideo();
video.addEventListener('canplay', paintToCanvas);