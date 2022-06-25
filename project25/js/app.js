const divs = document.querySelectorAll('div');


function logText(e) {
    //evitamos que sus hijos llamen sus padres
    e.stopPropagation(); //stop bubbling
    console.log(this)
}




divs.forEach(div => div.addEventListener('click', logText));