const cardImgs = document.querySelectorAll('.card__img');

window.addEventListener('scroll', effectImgs);

function effectImgs() {
    //para saber la cantidad de scroll hacia abajo
    const scrollPX = window.scrollY + innerHeight;

    cardImgs.forEach((img, index) => {

        const ubication = img.getBoundingClientRect();

        if (index !== 1) {

            if (ubication.top < scrollPX) {
                img.classList.add('animationImg');
            }
            if (ubication.top < 0) {
                img.classList.remove('animationImg');
            }
        } else {

            if (ubication.top < scrollPX) {
                img.classList.add('animationImgL');
            }

            if (ubication.top < 0) {
                img.classList.remove('animationImgL');
            }
        }



    })
}