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


//6. create a list of boulevards in paris that contain 'de' aynwhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const Boulevards_in_Paris = ['Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais',
    'Boulevard de l""Amiral-Bruix', 'Boulevard Mortier', 'Boulevard Poniatowski',
    'Boulevard Soult', 'Boulevard des Capucines', 'Boulevard de la Chapelle', 'Boulevard de Clichy',
    'Boulevard du Crime', 'Boulevard du Général-d"Armée-Jean-Simon', 'Boulevard Haussmann', 'Boulevard de l"Hôpital',
    'Boulevard des Italiens', 'Boulevard Lefebvre', 'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Malesherbes',
    'Boulevard Marguerite-de-Rochechouart', 'Boulevard Montmartre', 'Boulevard du Montparnasse', 'Boulevard Raspail', 'Boulevard Richard-Lenoir',
    'Boulevard Saint-Germain', 'Boulevard Saint-Michel', 'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard du Temple', 'Boulevard Voltaire',
    'Boulevard de la Zone'];

const listBoulevards = Boulevards_in_Paris.filter(boulevard => boulevard.includes('de'));
console.table(listBoulevards);


//7. Sort the people alphabetically by last name

const lastNames = ['Alex Bermejo', 'Cesar Zubieta', 'Gerson Aguedo', 'Bruno Díaz'];
const orderLastNames = lastNames.sort(function (lastOne, nextOne) {
    const [aname, alastname] = lastOne.split(' ');
    const [bname, blastname] = nextOne.split(' ');

    return alastname > blastname ? -1 : 1;

});

console.table(orderLastNames);

//Reduce exercise
//8. Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const sumUp = data.reduce((obj, item) => {

    if (!obj[item]) {
        obj[item] = 0;
    }

    obj[item]++;
    return obj;

}, {});

console.log(sumUp);


const tax = [12, 4, 12, 6, 4];
const upTax = tax.reduce((acc, cur) => {

    if (!acc[cur]) {
        acc[cur] = 0;
    }

    acc[cur]++;
    return acc;

}, {});

console.log(upTax);


