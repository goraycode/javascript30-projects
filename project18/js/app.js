const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [min, sec] = timeCode.split(':').map(parseFloat)
        return (min * 60) + sec;
    })
    .reduce((acc, cur) => acc + cur, 0);

let secondsLeft = seconds;
let hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
let min = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(hours, min, secondsLeft);GIT 