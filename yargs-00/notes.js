const fs = require('fs');
const os = require('os');

const yargs = require('yargs');

const note_modules = require('./modules');

var argv = yargs.argv;

console.log(argv);

var command = process.argv[2];
console.log("Command: " + command);

switch(command){
    case 'add':
        note_modules.add(argv.title, argv.body);
        break;
    case 'remove':
        note_modules.remove(argv.title);
        break;
    case 'read':
        note_modules.read(argv.title);
        break;
    case 'list':
        note_modules.list();
        break;
    default:
        console.log("Invalid Command");
}