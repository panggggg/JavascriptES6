//spread operator can spread out elements of an array, a map, or a set.

const alphabet = ["A", "B", "C"];
console.log(...alphabet); //Output: A B C

//Copying
const alphabetCopy = [...alphabet];
console.log(...alphabetCopy); //Output: A B C

//Copy objects
const user = { name: "Jonh", age: 20 }
const userCopy = { ...user }
console.log(userCopy)

//Merging
const odd = [1, 3, 5];
const combined = [2, 4, 6, ...odd];
console.log(combined); //Output: [ 2, 4, 6, 1, 3, 5 ]

//Merging Objects
const user1 = { name: "John", age: 20 };
const user2 = { name: "Ram", Salary: '20K' };
const userMerge = { ...user1, ...user2 };

console.log(userMerge)

//Passing as arguments
function sum(a, b) {
    return a + b;
}
const num = [1, 2];
console.log(sum(...num));

//In Destructuring variable
const [color, ...fruits] = ['red', 'lemon', 'banana', 'orange'];
console.log(color); //red
console.log(fruits); //[ 'lemon', 'banana', 'orange' ]

//Destructuring Objects
const people = { name: "Ram", age: 20, Salary: '20K', job: "Tester" };
const { name, age, ...details } = people;

console.log(name) //Ram
console.log(age); //20
console.log(details); //{ Salary: '20K', job: 'Tester' }