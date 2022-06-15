window.addEventListener('scroll', () => {
    //para saber la cantidad de scroll hacia abajo
    const scrollPX = window.scrollY;
    console.log(scrollPX);
    const cardImgs = document.querySelectorAll('.card__img');

    if (scrollPX >= 100) {

        cardImgs[0].classList.add('animationImg');
    } else {
        cardImgs[0].classList.remove('animationImg');
    }

    if (scrollPX >= 600) {

        cardImgs[1].classList.add('animationImgL');
    } else {
        cardImgs[1].classList.remove('animationImgL');
    }

    if (scrollPX >= 1200) {

        cardImgs[2].classList.add('animationImg');
    } else {
        cardImgs[2].classList.remove('animationImg');
    }

})