const inputFood = document.querySelector('#food');

eventListener();
function eventListener() {
    inputFood.addEventListener('keyup', searchFood)
}

function searchFood(e) {
    const foodSearch = e.target.value;

    //fetch here
    const url = 'db.json';

    fetch(url)
        .then(blob => blob.json())
        .then(result => filterFoods(result, foodSearch))
}

function filterFoods(result, foodSearch) {

    const results = document.querySelector('.results');

    if (!foodSearch.length) return;

    cleanHTML();

    const filterFood = result.filter(food => food.name.toLowerCase().includes(`${foodSearch}`));
    filterFood.forEach(food => {

        //destructuring
        const { name, price } = food;

        //scripting
        const card = document.createElement('div');
        card.className = 'card';

        const cardTitle = document.createElement('h2');
        cardTitle.className = 'card__title';
        cardTitle.textContent = name;

        const cardPrice = document.createElement('card__price');
        cardPrice.className = 'card__price';
        cardPrice.textContent = price;

        card.appendChild(cardTitle);
        card.appendChild(cardPrice);

        results.appendChild(card);
    });
}

function cleanHTML() {
    const results = document.querySelector('.results');
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }
}