//variables
const fields = document.querySelectorAll('.field');
const clock = document.querySelector('.panel__clock');
const inputMinute = document.querySelector('#minute');
const endTime = document.querySelector('.panel__text');

//functions

function checkOpt() {
    this.children[1].checked = true;
    const valueClock = Number(this.children[1].value);
    clock.textContent = valueClock;
    timer(valueClock * 60);

}

function getMinutes() {
    const valueClock = Number(this.value);
    clock.textContent = valueClock;
    timer(valueClock * 60);
}

let countdown;
function timer(seconds) {
    const value = Date.now();
    const then = value + seconds * 1000;
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        //check if we should stop it
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000);

}

function displayTimeLeft(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remaindMinutes = seconds % 3600;
    const minutes = Math.floor(remaindMinutes / 60);
    const remaindSeconds = seconds % 60;
    clock.textContent = `${hours}:${minutes}:${remaindSeconds < 10 ? '0' : ''}${remaindSeconds}`;
    displayEndTime(seconds);

}


function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be back at ${hour}:${minutes}`;
}




//events
fields.forEach(field => {
    field.addEventListener('click', checkOpt);
});

inputMinute.addEventListener('blur', getMinutes);