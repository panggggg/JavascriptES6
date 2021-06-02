//Create a new Map object
const john = { name: 'John Doe' }
const lily = { name: 'Lily Bush' }
const peter = { name: 'Peter Drucker' }

// let userRoles = new Map();

//Add elements to a Map
// userRoles.set(john, 'admin');


//Initialize a map
const userRoles = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
]);

//Get element from map by key
console.log(userRoles.get(lily)); //editor

let foo = { name: 'Foo' };
console.log(userRoles.get(foo)); //undefined

//Check the existence of an element by key
console.log(userRoles.has(foo)); //false
console.log(userRoles.has(lily)); //true

//Get number of elements in the map
console.log(userRoles.size); //3

//Iterate over map keys
for (const user of userRoles.keys()) {
    console.log(user.name);
    // Output: John Doe
    //         Lily Bush
    //         Peter Drucker
}

//Iterate over map values
for (const role of userRoles.values()) {
    console.log(role);
    // Output: admin
    //         editor
    //         subscriber
}

//Iterate over map elements
for (const elem of userRoles.entries()) {
    console.log(`${elem[0].name}: ${elem[1]}`);
    // Output: John Doe: admin
    //         Lily Bush: editor
    //         Peter Drucker: subscriber
}

//Convert map key or values to a array
const keys = [...userRoles.keys()];
console.log(keys);
// Output: [
//     { name: 'John Doe' },
//     { name: 'Lily Bush' },
//     { name: 'Peter Drucker' }
//      ]

const roles = [...userRoles.values()];
console.log(roles);
// Output: [ 'admin', 'editor', 'subscriber' ]


//Delete element by key
userRoles.delete(john);
// console.log(userRoles.get(john));

//Delete all elements in the map
// userRoles.clear();