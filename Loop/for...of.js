//Array
const scores = [80, 90, 70];

for (const score of scores) {
    console.log(score); //80 90 70
}

//String
const str = 'boo';
for (const value of str) {
    console.log(value); //b o o 
}

//Map
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const entry of map) {
    console.log(entry)
    // Output: 
    // [ 'a', 1 ]
    // [ 'b', 2 ]
    // [ 'c', 3 ]
}

//Set
const set = new Set([1, 1, 2, 2, 3, 3]);
for (const value of set) {
    console.log(value);
    // Output: 1
    //         2
    //         3

}