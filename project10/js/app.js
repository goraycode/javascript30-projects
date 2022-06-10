const boxes = document.querySelectorAll('input[type="checkbox"]');
const ps = document.querySelectorAll('p');

let counter = 0;
boxes.forEach((box, index) => {
    box.addEventListener('change', (e) => {
        const boxCheck = e.target.checked;
        if (boxCheck) {
            
            ps[index].classList.add('trash');
        } else {
            ps[index].classList.remove('trash');
        }

    })
});


function disabledAll() {
    ps.forEach(p => {
        p.classList.add('trash');
    });
    boxes.forEach(box => {
        box.checked = true;
    });
}