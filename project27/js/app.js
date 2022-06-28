const items = document.querySelector('.items');
let isDown = false;
//variables
let startX, scrollLeft;

let number = 35, divsItem = [];

for (let i = 0; i < number; i++) {

    divsItem.push(i + 1);

}

//functions
function generarLetra() {
    let letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let numero = (Math.random() * 15).toFixed(0);
    return letras[numero];
}

function colorHEX() {
    let coolor = "";
    for (let i = 0; i < 6; i++) {
        coolor = coolor + generarLetra();
    }
    return "#" + coolor;
}

function showCards() {

    divsItem.forEach(item => {
        const div = document.createElement('div');
        div.className = `item item${item}`;
        div.textContent = item;
        div.style.backgroundColor = colorHEX();
        items.appendChild(div);
    });
}




//Events
document.addEventListener('DOMContentLoaded', showCards);

items.addEventListener('mousedown', (e) => {
    isDown = true;
    items.classList.add('active');
    startX = e.pageX - items.offsetLeft;
    scrollLeft = items.scrollLeft;
});

items.addEventListener('mouseleave', () => {
    isDown = false;
    items.classList.remove('active');
});

items.addEventListener('mouseup', () => {
    isDown = false;
    items.classList.remove('active');
});

items.addEventListener('mousemove', (e) => {
    if (!isDown) return; //stop the fn from running
    e.preventDefault();
    const x = e.pageX - items.offsetLeft;
    const walk = x - startX;
    //if i want show card in 2 to 2, mul for n=2
    //const walk = (x - startX)*n;
    items.scrollLeft = scrollLeft - walk;
});
