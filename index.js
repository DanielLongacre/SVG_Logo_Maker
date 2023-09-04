const fs = require('fs');
const inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter name of your logo (3 initials): ',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter the color of the text: ',
            name: 'textcolor'
        },
        {
            type: 'choice',
            message: 'What shape do you want your logo: ',
            choices: ['Triangle', 'Circle', 'Square'],
            name: 'shape'
        },
        {
            type: 'input',
            message: 'Enter the color of the shape: ',
            name: 'shapecolor'
        },
    ]) 