class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === "") {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}

const person = new Person('Jane Doe');
console.log(person);

person.setName('Jane Smith'); //call setName();
console.log(person.getName());

//Class Person has 2 methods -> getName(), setName()
//getName(); return value of name
//setName(); assing name value, setName() removes the space of the newName throw that message is newName is empty
//constructor() calls setName()