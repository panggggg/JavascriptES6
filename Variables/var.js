var counter; // global
//var is function-scoped
//hoisting จุดประกาศฟังก์ชันที่ใกล้ที่สุด

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

/////////////////////////////////

function setWidth() {
    var width = 100;
    console.log(width);
}
//width; // Error: width is not defined
//because width is defined inside a function
//if not created inside a function is "Global scoped"


var age = 100;
if (age > 12) {
    var dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
}
console.log(dogYears); //700
//because dogYears is a function-scpoed and not defined in a function
//dogYears is global