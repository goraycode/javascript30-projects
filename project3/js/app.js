const img = document.querySelector('.img');

const spacing = document.querySelector('#spacing');

spacing.addEventListener('change', () => {
    img.style.borderWidth = `${spacing.value}px`;
})