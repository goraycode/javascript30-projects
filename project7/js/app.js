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
const nineteen = people.some(p => (new Date).getFullYear() - p.year >= 19)
console.log(nineteen);

//Array every //is everyone 19?
const allNineteen = people.every(p => (new Date).getFullYear() - p.year >= 19)

console.log(allNineteen);

//Array find
//Find is like filter, buit instead returns just the one you are looking for
//find the comment with the id of 823423
const findComment = comments.find(comment => comment.id === 823423);
console.log(findComment);


//Array findIndex
//Find the comment with this ID
//Delete the comment with the ID of 823423
const deleteComment = comments.findIndex(comment => comment.id === 823423);

console.log(deleteComment);

//delete that comment
comments.splice(deleteComment, 1);
console.log(comments);
