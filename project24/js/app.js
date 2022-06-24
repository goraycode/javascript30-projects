const nav = document.querySelector('.sticky');
const firstLink = document.querySelector('.first__link');


window.addEventListener('scroll', () => {
    const ubication = nav.getBoundingClientRect();

    if (ubication.top === 0) {
        firstLink.classList.add('show');
    } else {
        firstLink.classList.remove('show');
    }

})