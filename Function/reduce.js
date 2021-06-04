let pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22
    }
];


const totalYears = pilots.reduce(function (accumulator, pilot) {
    return accumulator + pilot.years;
}, 0); // starting value as 0 , if start at 100 output will be 182
console.log(totalYears) //82

//Find the most experirenced
const mostExpPilot = pilots.reduce((oldest, pilot) => { //oldest is accumulator
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});

console.log(mostExpPilot)
//Output: { id: 2, name: "Temmin 'Snap' Wexley", years: 30 }