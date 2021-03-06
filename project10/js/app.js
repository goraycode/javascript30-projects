const boxes = document.querySelectorAll('input[type="checkbox"]');
const ps = document.querySelectorAll('p');
const items = document.querySelectorAll('.item');

let check = [], old = 0;
boxes.forEach((box, index) => {
    box.addEventListener('click', (e) => {
        handleCheck(e, index);
    })
});

function handleCheck(e, index) {
    check = [...check, index];
    const boxCheck = e.target.checked;


    if (boxCheck) {
        console.log(check);
        ps[index].classList.add('trash');

        for (let i = check[0]; i <= check[check.length - 1]; i++) {
            ps[i].classList.add('trash');
            boxes[i].checked = true;
            items[i].classList.add('checked');
        }

        if (check[0] > check[check.length - 1]) {
            [initial, final] = [check[check.length - 1], check[0]];

            for (let i = initial; i <= final; i++) {
                console.log(i);
                ps[i].classList.add('trash');
                boxes[i].checked = true;
                items[i].classList.add('checked');
            }
        }

    } else {
        ps[index].classList.remove('trash');
        items[index].classList.remove('checked');
    }
}