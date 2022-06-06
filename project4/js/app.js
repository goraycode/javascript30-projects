const inventors = [
    { 'first': 'Albert', 'last': 'Einstein', 'year': 1580 },
    { 'first': 'Galileo', 'last': 'Galilei', 'year': 1350 },
    { 'first': 'Isaac', 'last': 'Newton', 'year': 1560 }
]

console.table(inventors);

//filter
//1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
console.table(fifteen);


//map
//2. Give us an array of the inventory first and last names
const inventory = inventors.map(inventor => `${inventor.first}, ${inventor.last}`);
console.table(inventory);


