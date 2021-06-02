class Person {
    constructor(name) {
        this.name = name;
        console.log(name);
    }
    getName() {
        return this.name;
    }
}

const john = new Person("John Doe");
const name = john.getName();
console.log(name);