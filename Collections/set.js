//Create a new Set from an array
const chars = new Set(['a', 'b', 'c', 'c', 'a']);
console.log(chars);
// Output: { 'a', 'b', 'c' }

//Get a size of a Set
const size = chars.size;
console.log(size); //3

//Add elements to a Set
chars.add('d');
console.log(chars);
// Output: { 'a', 'b', 'c', 'd' }

//Check if a value is in the Set
const exist = chars.has('a');
console.log(exist); //true

const exist2 = chars.has('z');
console.log(exist2); //false

//Remove elements from a Set
chars.delete('f');
console.log(chars); // Output: { 'a', 'b', 'c', 'd' }

//Clear 
// chars.clear();

//Looping the elements
const roles = new Set();
roles.add('admin')
    .add('editor')
    .add('subscriber');

for (const role of roles) {
    console.log(role);
}
// Output: admin
//         editor
//         subscriber