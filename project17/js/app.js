const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
    'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts',
    'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

console.table(bands);

//sort names
const sortedBands = bands.sort(function (lastOne, nextOne) {
    const [aWord] = lastOne.split(' ');
    const [bWord] = nextOne.split(' ');

    return aWord > bWord ? 1 : -1;
});

console.table(sortedBands);



function addHTML(data) {
    const results = document.querySelector('.results');

    data.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;

        results.appendChild(li);
    });
}
addHTML(bands);