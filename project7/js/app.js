const people = [
    { name: 'West', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen in my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

//Some and every checks
//Array some //is at least one person 19?
const nineteen = people.some(p => {
    if (2022 - p.year === 19) return p;
})

console.log(nineteen);

//Array every //is everyone 19?
const allNineteen = people.every(p => {
    if (2022 - p.year > 19) return p;
})

console.log(allNineteen);