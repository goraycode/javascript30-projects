const boxes = document.querySelectorAll('input[type="checkbox"]');
const ps = document.querySelectorAll('p');

let check = [], old = 0;
boxes.forEach((box, index) => {
    box.addEventListener('change', (e) => {
        check = [...check, index];
        const boxCheck = e.target.checked;


        if (boxCheck) {
            console.log(check);
            ps[index].classList.add('trash');

            for (let i = check[0]; i < check[check.length - 1]; i++) {
                ps[i].classList.add('trash');
                boxes[i].checked = true;
            }

            if (check[0] > check[check.length - 1]) {
                [initial, final] = [check[check.length - 1], check[0]];

                for (let i = initial; i < final; i++) {
                    console.log(i);
                    ps[i].classList.add('trash');
                    boxes[i].checked = true;
                }
            }




        } else {
            ps[index].classList.remove('trash');
        }

    })
});


