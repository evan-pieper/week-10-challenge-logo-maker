const fs = require('fs');
const inquirer = require('inquirer');
const generateSVG = require('./generateSVG.js');

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
        name: 'color',
        message: 'What color would you like your logo to be?',
        validate: function (input) {
            if(input.length < 1) {
                return 'Please enter a color.';
            }
            // Regular expression to match valid color names
            const colorNameRegex = /^(red|green|blue|yellow|magenta|cyan|white|black|gray|grey)$/i;

            // Regular expression to match valid hex color codes
            const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

            // Check if the input matches either the color name or hex code regex
            return colorNameRegex.test(input) || hexColorRegex.test(input);
        },
    },

    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: [
            "Circle",
            "Triangle",
            "Square",
            "Test",
        ],
        validate: function (input) {
            if(input.length < 1) {
                return 'Please enter a shape.';
            }
            return true;
        },
    },
];

function writeToFile(fileName, data)  //takes in a file name and data, then writes the data to the file (from fileName)
{
    fs.writeFile(fileName, generateSVG(data), function (err) {
        console.log(data);
        if (err) {
            console.log("error writing to file");
            return console.log(err);
        }
        console.log("Generated logo.svg");
    });
}


function init() { // takes in the questions array, then uses inquirer to prompt the user for answers to the questions, then passes the answers to SVG_generator.js, which returns the SVG file, which is then passed to writeToFile
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        writeToFile("./SVG_generator_output/logo.svg", data);
    });
}

// Function call to initialize app
init();
