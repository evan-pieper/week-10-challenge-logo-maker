const fs = require('fs');
const inquirer = require('inquirer');
const generateSVG = require('./generateSVG.js');

function validateInput(input) {
    if (input === '') {
        return 'Please enter a valid input.';
    }
    return true;
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your logo: ',
        validate: function (input) {
            if(input.length < 1) {
                return 'Please enter at least 1 character.';
            }
            if (input.length > 3) {
                return 'Please enter up to 3 characters.';
            }
            return true;
        },
    },

    {
        type: 'input',
        name: 'title',
        message: 'What color would you like your logo to be?',
        validate: function (input) {
            if(input.length < 1) {
                return 'Please enter a color.';
            }
            return true;
        },
    },

    {
        type: 'list',
        name: 'title',
        message: 'What shape would you like your logo to be?',
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ],
        validate: validateInput,
    },
];

function writeToFile(fileName, data)  //takes in a file name and data, then writes the data to the file (from fileName)
{
    fs.writeFile(fileName, generateSVG(data), function (err) {
        if (err) {
            console.log("error writing to file");
            return console.log(err);
        }
    });
}


function init() { // takes in the questions array, then uses inquirer to prompt the user for answers to the questions, then passes the answers to generateMarkdown.js, which returns the markdown, which is then passed to writeToFile
    inquirer.prompt(questions).then((data) => {
        //data.license = getLicense(data.license);
        writeToFile("./MdGenerator_output/README.md", data);
    });
}

// Function call to initialize app
init();
