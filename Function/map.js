
let officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

var allOfficers = officers.map(value => {
    return officers //จะวนตามจำนวนของ dict ใน officers
    //Output: [
    //   [
    //     { id: 20, name: 'Captain Piett' },     
    //     { id: 24, name: 'General Veers' },     
    //     { id: 56, name: 'Admiral Ozzel' },     
    //     { id: 88, name: 'Commander Jerjerrod' }
    //   ],
    //   [
    //     { id: 20, name: 'Captain Piett' },
    //     { id: 24, name: 'General Veers' },
    //     { id: 56, name: 'Admiral Ozzel' },
    //     { id: 88, name: 'Commander Jerjerrod' }
    //   ],
    //   [
    //     { id: 20, name: 'Captain Piett' },
    //     { id: 24, name: 'General Veers' },
    //     { id: 56, name: 'Admiral Ozzel' },
    //     { id: 88, name: 'Commander Jerjerrod' }
    //   ],
    //   [
    //     { id: 20, name: 'Captain Piett' },
    //     { id: 24, name: 'General Veers' },
    //     { id: 56, name: 'Admiral Ozzel' },
    //     { id: 88, name: 'Commander Jerjerrod' }
    //   ]
    // ]
});
console.log(allOfficers)


//ID
var officersIds = officers.map(officer => {
    return officer.id
});
console.log(officersIds) //[ 20, 24, 56, 88 ]


//Name
var nameOfficers = officers.map(officer => {
    return officer.name
})
console.log(nameOfficers)
//Output : [
//     'Captain Piett',
//     'General Veers',
//     'Admiral Ozzel',
//     'Commander Jerjerrod'
//   ]
