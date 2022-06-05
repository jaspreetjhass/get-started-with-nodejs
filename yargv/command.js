const yargs = require('yargs')
const notes = require('./notes-utils.js')

yargs.version('1.1.1')

yargs.command({
    command: 'print',
    describe: 'print the text',
    handler: function () {
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
    handler: function (argv) {
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        body: {
            describe: 'body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Body: ' + argv.body)
    }
})


yargs.parse()
//console.log(yargs.argv)