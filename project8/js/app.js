const colorInput = document.querySelector('#color');
const rangeInput = document.querySelector('#range');
const checkInput = document.querySelector('#check.checked');

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 300;
canvas.height = window.innerHeight - 100;

//color of pencil
colorInput.addEventListener('change', (e) => {
    const newColor = e.target.value;
    ctx.strokeStyle = newColor;
})


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
//width line
rangeInput.addEventListener('change', (e) => {
    const valueRange = e.target.value;
    ctx.lineWidth = valueRange;

})


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;


function draw(e) {
    if (!isDrawing) return; //stop the fn from running when they are not moused down

    //ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);

    //go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    //change the position of pencil
    [lastX, lastY] = [e.offsetX, e.offsetY];

    //change of color
    hue++;
    if (hue >= 360) {
        hue = 0;
    }

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);