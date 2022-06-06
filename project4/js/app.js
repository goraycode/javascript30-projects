const inventors = [
    { 'first': 'Albert', 'Second': 'Einstein', 'year': 1580 },
    { 'first': 'Galileo', 'Second': 'Galilei', 'year': 1350 },
    { 'first': 'Isaac', 'Second': 'Newton', 'year': 1560 }
]

console.table(inventors);


//1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
console.table(fifteen);
