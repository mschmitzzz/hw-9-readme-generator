const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for this project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how this project is used.',
    },
    {
        type: 'input',
        name: 'constribution',
        message: 'Please describe the contribution guidelines for this project.',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please describe instructions for testing this application.',
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
        ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },
];

inquirer.prompt(questions).then ((data) => {
    let readmeCreate = `readme text ${data.title}`;
    const fileName = `README.md`;
    fs.writeFile(fileName, readmeCreate, (err) =>
    err ? console.log(err) : console.log('Success!'));
});