let people1 = 
[{
    name : 'Tatas',
    company : 'Arkademy',
    job : 'Trainer',
    status : 'single',
    city : 'Jogja'
},
{
    name : 'Pratama',
    company : 'Emago',
    job : 'Trainer',
    status : 'single',
    city : 'Jakarta'
}]

let people1baru =
[{
    ...people1[0], status : 'menikah', city : 'Jakarta'
},
{
    ...people1[1], company : 'Arkademy', city : 'Jogja'
}]

console.log(people1)
console.log("----------------------------------")
console.log(people1baru)
