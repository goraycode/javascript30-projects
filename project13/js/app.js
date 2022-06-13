window.addEventListener('scroll', () => {
    //para saber la cantidad de scroll hacia abajo
    const scrollPX = window.scrollY;
    console.log(scrollPX);
    const cardImgs = document.querySelectorAll('.card__img');

    if (scrollPX <= 300) {

        cardImgs[0].classList.add('animationImg');
    } else {
        cardImgs[0].classList.remove('animationImg');
    }

    /*  const cardImgs = document.querySelectorAll('.card__img');
 
     cardImgs.forEach(img => {
         const ubicacionImg = img.getBoundingClientRect();
         console.log(ubicacionImg);
     }); */




})