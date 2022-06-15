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