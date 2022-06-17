const hero = document.querySelector('.hero');
const text = hero.querySelector('h2');
const walk = 100; //100px

function getEffect(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    
    if (this !== e.target) {
        x = x + e.target.offesetLeft;
        y = y + e.target.offesetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / width * walk) - (walk / 2));

    //only color
    // text.style.textShadow = `${xWalk}px ${yWalk}px 1px rgba(0,0,0,0.6)`;

    //multiply colors

    text.style.textShadow = `${xWalk}px ${yWalk}px 1px rgba(0,0,0,0.6), 
    ${xWalk * -1}px ${yWalk}px 1px red,
    ${yWalk}px ${xWalk * -1}px 1px skyblue,
    ${yWalk * -1}px ${xWalk}px 1px greenyellow`;

}



hero.addEventListener('mousemove', getEffect);