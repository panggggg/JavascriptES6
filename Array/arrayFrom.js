//Create an array
function arrayFromArgs() {
    return Array.from(arguments);
}

console.log(arrayFromArgs(1, 'A')); //[1, 'A']

//Array.from() with mapping function
function addOne() {
    return Array.from(arguments, x => x + 1);
}
console.log(addOne(1, 2, 3)); //[ 2, 3, 4 ]

//Array.from() with a this value
let doubler = {
    factor: 2,
    double(x) {
        return x * this.factor;
    }
}
let scores = [5, 6, 7];
let newScores = Array.from(scores, doubler.double, doubler);
console.log(newScores); //[ 10, 12, 14 ]