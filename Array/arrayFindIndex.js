//Example1
const ranks = [1, 5, 7, 8, 10, 7];
const index = ranks.findIndex(rank => rank === 7);
console.log(index); //2 number of 7 in ranks

//Example2
const index2 = ranks.findIndex(
    (rank, index2) => rank === 7 && index2 > 2
);

console.log(index2); //5