const fs = require('fs');
const inquirer = require('inquirer');
const {Triange, Circle, Square} = require('./lib/shapes');



//User questions
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters for you logo name: ',
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'Enter the color(or hexadecimal number) of the text: ',
        },
        {
            type: 'choice',
            name: 'shape',
            message: 'Pick a shape for your logo: ',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: 'Enter the color(or hexadecimal number) of the shape: ',
        },
    ]) 

//Write data to a file
function writeToFile(fileName, data) {
    console.log('Creating a logo...')
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('You have successfully generated a logo!');
    });
}

async function init() {
    //Prompt user for input
    const input = await inquirer.prompt();

    
}