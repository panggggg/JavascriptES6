// const getRandomNumber = function (limit) {
//     let random = Math.random() * limit;
//     return Math.ceil(random)
// }
// console.log(getRandomNumber(100));

//Arrow Funtion = () => {}
const getRandomNumber = limit =>
    Math.ceil(Math.random() * limit);

console.log(getRandomNumber(100));

//ES5
// function(arguments) {

// }



//ES6
// (arguments) => {

// }