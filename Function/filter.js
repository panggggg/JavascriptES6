let pilots = [
    {
        id: 2,
        name: "Wedge Antilles",
        faction: "Rebels"
    },
    {
        id: 8,
        name: "Ciena Ree",
        faction: "Empire"
    },
    {
        id: 40,
        name: "Iden Versio",
        faction: "Empire"
    },
    {
        id: 66,
        name: "Thane Kyrell",
        faction: "Rebels"
    },
];

const rebels = pilots.filter(function (pilot) {
    return pilot.faction === "Rebels";
});
console.log(rebels);
//Output: [
//          { id: 2, name: 'Wedge Antilles', faction: 'Rebels' },
//          { id: 66, name: 'Thane Kyrell', faction: 'Rebels' }
//         ]

const empire = pilots.filter(pilot => pilot.faction === "Empire");
console.log(empire)
//Output: [
//    { id: 8, name: 'Ciena Ree', faction: 'Empire' },
//    { id: 40, name: 'Iden Versio', faction: 'Empire' }
// ]

const Name = pilots.filter(pilot => pilot.name === "Ciena Ree");
console.log(Name)
//Output: [ { id: 8, name: 'Ciena Ree', faction: 'Empire' } ]