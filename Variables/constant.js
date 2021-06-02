//const is block-scpoed
//can't change value

let a = 0
a = 1

const PI = 3.14
// PI = 1 -> Error 

const obj = { a: 1 }
//การเปลี่ยนค่าภายใน object ไม่ได้ทำให้ memory address เปลี่ยนไป
obj.a = 2
console.log(obj) //Output: {a:2}