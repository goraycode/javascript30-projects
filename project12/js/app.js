
let pressed = [];
let wordSecret = 'hi'
window.addEventListener('keyup', (e) => {
    pressed = [...pressed, e.key];
    //el array deja de crecer y corta los elementos de acuerdo
    //a la longitud de la palabra secreta
    pressed.splice(-wordSecret.length - 1, pressed.length - wordSecret.length);
    console.log(pressed);
    if (pressed.join('').includes(wordSecret)) {
        console.log('ding ding!');
    }
});