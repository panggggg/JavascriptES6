// function countToTen() {
//     for (var i = 1; i <= 10; i++) {
//         console.log(i);
//     }
//     console.log(i); //i = 11
// }

// countToTen();

// //////////////////////////////////
// //ประกาศตัวแปร let; จะเรียกใช้ได้แค่ภายใน {} ที่ประกาศตัวแปรไว้
// function countToTen() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
//     console.log(i); //Error: i is not defined
// }

// countToTen();

////////////////////////////////

function countToTen() {
    function multiply2(n) {
        return n * 2;
    }
    for (let i = 1; i <= 10; i++) {
        function multiply(n) {
            return n * 5;
        }
        console.log(multiply(i)); //ส่งค่า i ไปที่ multiply() line 28
    }

    console.log(multiply2(10)); //ส่ง 10 ไปที่ multiply() line 24
}

countToTen();

//Block scope is within curly brackets