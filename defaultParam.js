// const sayHi = (name1, name2, name3, greeting) => {
//     console.log(greeting + name1);
//     console.log(greeting + name2);
//     console.log(greeting + name3);
// }

// sayHi('James', 'Zarin', 'Rachel', 'Hello ');


//Default Parameter
const sayHi = (name1, name2, name3, greeting = 'Hello ') => {
    console.log(greeting + name1);
    console.log(greeting + name2);
    console.log(greeting + name3);
}

sayHi('James', 'Zarin', 'Rachel');