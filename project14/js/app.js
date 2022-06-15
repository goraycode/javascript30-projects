//reference vs copy
let number = 1;
let number2 = number;
console.log(number, number2); //1 1

number = 18;
console.log(number, number2); //18 1

let myname = 'Gerson';
let secondName = myname;
console.log(myname, secondName);

myname = 'Jofre'
console.log(myname, secondName);


let fruits = ['apple', 'strawberry', 'pineaple', 'pear', 'peach'];
let otherFruits = fruits;
fruits[1] = 'cherry';

//otherFruits same to fruits, reference

//with reference
let moreFruits = [...fruits];
fruits[2] = 'watermelon';
console.log(fruits, moreFruits);


let person = {
    username: 'Gerson',
    age: 21,
    proffesion: 'Engineer',
    socialmedia: {
        twitter: '@Goraycode',
        instagram: 'Goraycode'
    }
}

//with copy => update the original object
let newPerson = person;
newPerson.username = 'Jofre';
console.log(newPerson);


//with reference not update the original object
let otherPerson = {...person} || Object.assign({}, person);
otherPerson.proffesion = 'Software engineer';
otherPerson.socialmedia.instagram = 'Gerson Aguedo Yanac';
console.log(otherPerson);