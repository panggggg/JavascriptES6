let person = {
    age: 21,
    gender: 'male',
    name: {
        firstName: 'Pawornwan',
        lastName: 'Sriprathung'
    },
}

// let name = person.age

//Use destructuring
let { age, gender, name: { firstName, lastName } } = person
// let { firstName, lastName } = name

console.log(firstName); //Pawornwan
console.log(age); //{ firstName: 'Pawornwan', lastName: 'Sriprathung' }

