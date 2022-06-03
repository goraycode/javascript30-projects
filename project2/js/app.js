function setDate() {
    const clockSecond = document.querySelector('.clock__second');
    const clockMinute = document.querySelector('.clock__minute');
    const clockHour = document.querySelector('.clock__hour');

    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondDegrees = ((second / 60) * 360);
    const minuteDegrees = ((minute / 60) * 360);
    const hourDegrees = ((hour / 12) * 360);

    clockSecond.style.transform = `rotate(${secondDegrees}deg)`;
    clockMinute.style.transform = `rotate(${minuteDegrees}deg)`;
    clockHour.style.transform = `rotate(${hourDegrees}deg)`

}


function digitalClock() {
    const dHour = document.querySelector('.dHour');
    const dMinute = document.querySelector('.dMinute');
    const dSecond = document.querySelector('.dSecond');

    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    dHour.textContent = hour;
    dMinute.textContent = minute;
    dSecond.textContent = second;
}


setInterval(() => {
    setDate();
    digitalClock();
}, 1000);