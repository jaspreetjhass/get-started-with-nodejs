const fs = require('fs')
const chalk=require('chalk')

const addNote = (title, body) => {

    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length == 0) {
        notes.push({ title: title, body: body })
        debugger
        saveNote(notes)
    } else {
        console.log(chalk.yellow('title is already taken'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const notesStr = dataBuffer.toString()
        return JSON.parse(notesStr)
    }
    catch (error) {
        return []
    }
}

const listNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const notesStr = dataBuffer.toString()
        console.log(chalk.green('Notes are :'))

        const notes = JSON.parse(notesStr)
        notes.filter((note) => console.log(chalk.yellow('title is ' + note.title)))
    }
    catch (error) {
        console.log(chalk.red('notes list is empty'))
    }
}

const saveNote = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const removeNote=(title) => {
    const notes=loadNotes()
    const filteredNotes=notes.filter((note) => note.title !== title)

    if(notes.length > filteredNotes.length){
        console.log(chalk.red('title removed is '+title))
        saveNote(filteredNotes)
    }else{
        console.log(chalk.yellow('note is not found'))
    }

}

const readNote=(title) => {

    const notes=loadNotes()

    const note = notes.find((note) => note.title===title)

    if(note){
        console.log(chalk.green('body of the title is '+note.body))
    }else{
        console.log(chalk.inverse.red('no note found with title '+title))
    }

}

module.exports = { addNote: addNote, removeNote: removeNote, listNotes:listNotes, readNote:readNote }