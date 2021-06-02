var counter; // global

function increase() {
    var counter = 10; //local ไม่สามารถเรียกใช้งานนอก increase() ได้
}

for (var i = 0; i < 5; i++) {
    console.log("Inside the loop: ", i);
    // Output: Inside the loop:  0
    //         Inside the loop:  1
    //         Inside the loop:  2
    //         Inside the loop:  3
    //         Inside the loop:  4
}

console.log("Outside the loop: ", i); //Output: Outside the loop:  5