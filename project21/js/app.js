const imgData = document.querySelector('.data__img');
const speedText = document.querySelector('.data__speed');
navigator.geolocation.watchPosition((data) => {
    console.log(data);
    imgData.style.transform = `rotate(${data.coords.heading})`;
    speedText.textContent = `${Number(data.coords.speed).toFixed(2)} km/h`;
})