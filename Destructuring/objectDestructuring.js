const person = {
    firstName: 'John',
    lastName: 'Doe'
};

// let firstName = person.firstName;
// let lastName = person.lastName;

const { firstName, lastName } = person;

console.log(firstName);
console.log(lastName);

//Setting default values
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2017
}

const { brand, model, color = "white", year: currentYear = 2020 } = car;

console.log(color); //White
console.log(currentYear); //2017