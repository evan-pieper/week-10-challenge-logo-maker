# SVG Logo Maker

## Description
The SVG Logo Maker is a Node.js command-line application designed to generate simple logos and save them as SVG files. The application allows users to customize their logos by choosing a shape, color, and text. It is particularly handy for freelance web developers looking to create quick and simple logos for their projects without needing to hire a graphic designer.

## Table of Contents
Installation
Usage
Testing
Video Walkthrough
Sample Output
License
Contributing
Questions

## Installation
To install the SVG Logo Maker, clone the repository onto your local machine. Then, navigate to the root directory of the project in your terminal and run the following command to install the necessary dependencies:
```npm install```
Then run the following command to start the application:
```node index.js```

## Usage
The SVG Logo Maker is a command-line application. When the application is started, the user is prompted to choose up to 3 characters for the logo's design. Next, the user is asked to select a shape for their logo. The user can choose from the following shapes:
* Circle
* Square
* Triangle
After choosing a shape, the user is prompted to choose a color for their logo
The logo will then be generated and saved as an SVG file in the "logos" folder. The user can then use the logo for their project.

## Testing
The SVG Logo Maker uses the Jest testing framework to test the application's functions. To run the tests, navigate to the root directory of the project in your terminal and run the following command:
```npm run test```

## Video Walkthrough
Follow this link: 

## Sample Output
```
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="50,175 200,175 125,25"  fill="red" />

    <text x="125" y="150" font-size="60" text-anchor="middle" fill="white">TST</text>

    </svg>
```

## License
MIT License
## Contributing

## Questions

## Credits
EDX Bootcamp for providing the starter code for this project.
```
