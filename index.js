const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: (value) => {if(value){return true} else {return 'Enter a value to continue.'}}
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.',
        validate: (value) => {if(value){return true} else {return 'Enter a value to continue.'}}
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the app?',
        validate: (value) => {if(value){return true} else {return 'Enter a value to continue.'}}
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        validate: (value) => {if(value){return true} else {return 'Enter a value to continue.'}}
    },
    {
        type: 'input',
        name: 'constribution',
        message: 'Please describe the contribution guidelines for this project.',
        validate: (value) => {if(value){return true} else {return 'Enter a value to continue.'}}
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please describe instructions for testing this application.',
        validate: (value) => {if(value){return true} else {return 'Enter a value to continue.'}}
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license do you want to use for this project?',
        choices: [
            'Apache License 2.0', 
            'GNU General Public License v3.0', 
            'MIT License', 
            'BSD 2-Clause "Simplified" License', 
            'BSD 3-Clause "New" or "Revised" License', 
            'Boost Software License 1.0', 
            'Creative Commons Zero v1.0 Universal', 
            'Eclipse Public License 2.0', 
            'GNU Affero General Public License v3.0', 
            'GNU General Public License v2.0', 
            'GNU Lesser General Public License v.2.1', 
            'Mozilla Public License 2.0', 
            'The Unlicense',
            'None',
        ],
        validate: (value) => {if(value){return true} else {return 'Enter a value to continue.'}}
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (value) => {if(value){return true} else {return 'Enter a value to continue.'}}
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: (value) => {if(value){return true} else {return 'Enter a value to continue.'}}
    },
];

inquirer.prompt(questions).then ((data) => {
    let readmeTemplate = 
`# ${data.title}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## How to Contribute
${data.contribution}

## Tests
${data.test}

## Questions
Visit my GitHub profile: ${data.github}
If you have any additional questions about this project, you can email me at ${data.email}`;

    const fileName = `README.md`;
    fs.writeFile(fileName, readmeTemplate, (err) =>
    err ? console.log(err) : console.log('Success!'));
});