const fs=require('fs')


const personData=fs.readFileSync('./person-info.json');
const personDataStr=personData.toString()

const person=JSON.parse(personDataStr)

person.age=30
person.name='Anmol Kapoor'

fs.writeFileSync('./person-info.json',JSON.stringify(person))