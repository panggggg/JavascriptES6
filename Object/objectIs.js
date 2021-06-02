//Object.is() -> check if two values are the same value.

//Negative Zero
const amount = +0,
    volume = -0;
console.log(volume === amount); //true

//Object.is()
const amount2 = +0,
    volume2 = -0;
console.log(Object.is(amount2, volume2)); //false

//NaN
const quantity = NaN;
console.log(quantity === quantity); //false

const quantity2 = NaN;
console.log(Object.is(quantity2, quantity2)); //true