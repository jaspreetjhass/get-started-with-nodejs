const fs = require('fs')

const addNote = function (title, body) {

    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length == 0) {
        notes.push({ title: title, body: body })
        saveNote(notes)
    } else {
        console.log('title is already taken')
    }
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const notesStr = dataBuffer.toString()
        return JSON.parse(notesStr)
    }
    catch (error) {
        return []
    }
}

const saveNote = function (notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = { addNote: addNote }