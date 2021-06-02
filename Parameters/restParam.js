//rest parameter is prefix with ... -> (...args)

function sum(...args) { //args is an array
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return console.log(total); // total is 6
}

sum(1, 2, 3);