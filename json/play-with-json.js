const fs=require('fs')

const person={name: 'Anmol',planet: 'Earth',age: 34}

const personStr=JSON.stringify(person)

fs.writeFileSync('person-info.json',personStr)