// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors');
const generateMarkdown = require('./utils/generateMarkdown');

// The array of questions that build the readme
const questions = [
  {
    type: 'input',
    name: 'title',
    message: colors.brightMagenta('What is the name of your app?'),
  },
  {
    type: 'input',
    name: 'description',
    message: colors.brightMagenta('Describe your app:'),
  },
  {
    type: 'input',
    name: 'image',
    message: colors.brightMagenta('Provide the URL or the path of an image or GIF for your app (optional):'),
  },
  {
    type: 'input',
    name: 'installation',
    message: colors.brightYellow('How do I install your app?'),
  },
  {
    type: 'input',
    name: 'usage',
    message: colors.brightYellow('How do I use your app?'),
  },
  {
    type: 'list',
    name: 'license',
    message: colors.brightCyan('Which license will you use?'),
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: colors.brightCyan('How can people contribute?'),
  },
  {
    type: 'input',
    name: 'tests',
    message: colors.brightMagenta('How can the app be tested?'),
  },
  {
    type: 'input',
    name: 'github',
    message: colors.brightGreen('Enter your GitHub username:'),
  },
  {
    type: 'input',
    name: 'email',
    message: colors.brightGreen('Enter your email address:'),
  },
];


// Function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md created successfully!')
  );
}

// Function to initialize the app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);

    // Write the content to README.md
    writeToFile('README.md', markdownContent);
  });
}

// Initialize app
init();
