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
    const filterFood = result.filter(food => food.name.toLowerCase().includes(`${foodSearch}`));
    
    //scripting
    
    
}