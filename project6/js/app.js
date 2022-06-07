const inputFood = document.querySelector('#food');

eventListener();
function eventListener() {
    inputFood.addEventListener('keyup', searchFood)
}

function searchFood(e) {
    console.log(e.target.value);
    //fetch here
}