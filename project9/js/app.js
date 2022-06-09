const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 8 }
];

//different console

//regular
console.log('hello');

//interpolated
//%s === second parameter
console.log('Hello I am a %s string!', '🙂');

//styled
//%c it's important for give a styles
console.log('%c Hola', 'font-size:2rem; color:red');

//warning
console.warn('Oh no!');

//error
console.error('Impossible');

//info
console.info('this is important');

//Testing
//if the first expretion is wrong show  the message, if its correct it doesn't
console.assert(1 === 2, 'That is wrong!');

//clearing
console.clear();

//Viewing DOM Elements
const p = document.querySelector('.makeGreen');
console.log(p);
//to see the propierties
console.dir(p);


//Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`); //collapsed
    /* console.group(`${dog.name}`); no collapsed */

    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);

    //end
    console.groupEnd(`${dog.name}`);

});
