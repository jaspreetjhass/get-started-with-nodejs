const yargs = require('yargs')
const notes = require('./notes-utils.js')

yargs.version('1.1.1')

yargs.command({
    command: 'print',
    describe: 'print the text',
    handler() {
        console.log('hello from yargs')
    }
})

yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'remove', describe: 'remove a note',
    builder:
    {
        title:
        {
            describe: 'remove a title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
     }
})

yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: function(){
        notes.listNotes()
    }  
})


yargs.parse()
//console.log(yargs.argv)