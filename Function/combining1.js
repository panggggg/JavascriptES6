const arr = [1, 2, 3, 4, 5]
console.log(arr) //Output: [ 1, 2, 3, 4, 5 ]

//filter ตัวที่หาร 2 ลงตัว
const evenNumbers = arr.filter(value => {
    return value % 2 === 0
})
console.log(evenNumbers) //Output: [ 2, 4 ]

//วนลูป array แล้วคูณ 3
const multiplyByThree = evenNumbers.map(value => {
    return value * 3
})
console.log(multiplyByThree) //Output: [ 6, 12 ]

//ผลรวมทั้งหมด
const totalValue = multiplyByThree.reduce((acc, curr) => {
    return acc + curr
}, 0)
console.log(totalValue) //18