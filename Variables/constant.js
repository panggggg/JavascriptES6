name = 'Pang';
age = 21;

console.log(name)
console.log(age + 1)

//////////////////////////////////////

const name2 = "Pawornwan";
const age2 = 21;

console.log(name2)

//age2 = age2 + 1; // <- Error : can't change value because age2 is constant variable

//////////////////////////////////////

const array = [1, 2, 3, 4, 5];
const obj = {
    name: "Pang",
    age: 21
};

console.log(array);
console.log(obj);

//การเพิ่มค่าใน array
//array = [6, 7, 8, 9, 10] <- Error : because array is constant variable can't change the value.
array.push(6)
console.log(array);

//เปลี่ยนค่า age ใน obj
obj.age = 22;
console.log(obj);