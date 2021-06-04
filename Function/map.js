//map คือ การวนค่าทุกค่าใน array

const arr = [1, 2, 3, 4, 5]

const multiplyByTwo = arr.map(value => {
    return value * 2
})

console.log(arr) //[ 1, 2, 3, 4, 5 ]
console.log(multiplyByTwo) //[ 2, 4, 6, 8, 10 ]