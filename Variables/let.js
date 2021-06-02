var x = 10;
console.log(x) // x is 10

{
    let x = 2;
    console.log(x) // x is 2
}
console.log(x) // x is 10

for (let i = 0; i < 5; i++) {
    console.log("Inside the loop: ", i);
    // Output: Inside the loop:  0
    //         Inside the loop:  1
    //         Inside the loop:  2
    //         Inside the loop:  3
    //         Inside the loop:  4
}

console.log("Outside the loop: ", i); //Output: Error