const cards = document.querySelectorAll('.card');
const form = document.querySelector('.form');
const fieldItem = document.querySelector('#item');
const fieldImg = document.querySelector('#img');
const adds = document.querySelector('.adds');
adds.style.display = 'none';

let objectFood = {
    img: '',
    food: '',
    amount: 0
}

let foods = [];

cards.forEach(card => {
    card.addEventListener('click', addItem);
})

function addItem(e) {
    const food = e.target.children[1].textContent;
    const img = e.target.children[0].src;

    fieldItem.value = food;
    fieldImg.value = img;
}

function eventListeners() {
    form.addEventListener('submit', saveFood)
}

function showMessage(message) {
    const pMessage = document.createElement('p');
    pMessage.textContent = message;
    pMessage.classList.add('message');

    const getMessage = document.querySelector('.message');
    if (getMessage !== null) {
        getMessage.remove();
    }

    form.appendChild(pMessage);

    setTimeout(() => {
        pMessage.remove();
    }, 1500);
}
function saveFood(e) {
    e.preventDefault();

    if (fieldItem.value) {
        showMessage('Success');

        objectFood = {
            img: fieldImg.value,
            food: fieldItem.value,
            amount: 1,
        }


        //add all foods
        foods = [...foods, objectFood];

        createCard(fieldItem.value, fieldImg.value);

    }

    form.reset();

}


function createCard(food, img) {
    adds.style.display = 'flex';

    const divCard = document.createElement('div');
    divCard.classList.add('divCard');

    const imgCard = document.createElement('img');
    imgCard.src = img;

    const foodCard = document.createElement('p');
    foodCard.textContent = food;

    const amountCard = document.createElement('p');
    amountCard.textContent = 1;

    divCard.appendChild(imgCard);
    divCard.appendChild(foodCard);
    divCard.appendChild(amountCard);

    adds.appendChild(divCard);
}


eventListeners();