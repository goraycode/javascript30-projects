const nav = document.querySelector('.sticky');
const firstLink = document.querySelector('.first__link');


function fixNav() {
    const ubication = nav.getBoundingClientRect();

    if (ubication.top === 0) {
        firstLink.classList.add('show');
    } else {
        firstLink.classList.remove('show');
    }
}

window.addEventListener('scroll', fixNav)