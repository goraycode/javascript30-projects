const inventors = [
    { 'first': 'Albert', 'last': 'Einstein', 'year': 1580, 'passed': 1650 },
    { 'first': 'Galileo', 'last': 'Galilei', 'year': 1350, 'passed': 1400 },
    { 'first': 'Isaac', 'last': 'Newton', 'year': 1560, 'passed': 1580 }
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

//sort
//3. Sort the inventors by birthdate, oldest to youngest
const birthdates = inventors.sort((a, b) => a.year - b.year);
console.table(birthdates);


//reduce
//4. How many years did all the inventors live
const liveInventors = inventors.reduce((acc, cur) => acc + (cur.passed - cur.year), 0);
console.log(liveInventors);


//5. sort the inventors by year lived
const livedInventors = inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    return lastGuy > nextGuy ? -1 : 1;
});
console.table(livedInventors);
