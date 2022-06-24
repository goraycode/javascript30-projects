const nav = document.querySelector('.sticky');
const firstLink = document.querySelector('.first__link');


window.addEventListener('scroll', () => {
    const ubication = nav.getBoundingClientRect();

    if (ubication.top === 0) {
        nav.style.backgroundColor = 'red';
        firstLink.classList.add('show');
    } else {
        nav.style.backgroundColor = 'black';
        firstLink.classList.remove('show');
    }

})