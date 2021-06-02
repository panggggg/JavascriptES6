//Example1
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.find(e => e % 2 == 0)); //2

//Example2
const customers = [{
    name: 'ABC Inc',
    credit: 100
}, {
    name: 'ACME Crop',
    credit: 200
}, {
    name: 'IoT AG',
    credit: 300
}];
console.log(customers.find(c => c.credit > 100));
// Output: { name: 'ACME Crop', credit: 200 }