const items = document.querySelector('.items');
let divsItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

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


document.addEventListener('DOMContentLoaded', showCards);