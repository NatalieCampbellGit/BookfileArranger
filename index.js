// TODO in cosole: npm init -y
// initiates the node to create file/metadata 
// TODO in console: npm init 
// create package.json 
// TODO in console: npm i && node index.js
// install && run the node index.js 

//! Test Answers
// Professional README Generator
// When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions. This generator is a command-line application that dynamically generates a professional README.md file from a user's input.
// Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.
// Answer the questions as they are asked. Most questions require your input while some are a list option to choose from. Follow the prompts. 
// State if you are open to contributions and what your requirements are for accepting them. For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self. You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.
// The first sentence is often the most difficult one for a lot of writers when they sit down to write.

// Include packages needed for this application (inquirer)
// List global constant references 

const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    { // Title 
        type: 'input',
        message: 'What is your project title?', 
        name: 'title',        
    },
    { // Description 
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project:', 
        name: 'description',
    },
    { // Installation Instructions
        type: 'input',
        message: 'What are the steps required to install your project?', 
        name: 'installation',
    },
    { // Usage Information
        type: 'input',
        message: 'Please provide instructions and examples for use (include screenshots as needed):', 
        name: 'usage',
    },
    { // Contribution Guidelines
        type: 'input',
        message: 'Please provide your project contribution guidelines to allow other developers to contribute:', 
        name: 'contribution',
    },
    { // Test Instructions
        type: 'input',
        message: 'Please provide tests for your application and/or examples on how to run them:', 
        name: 'tests',
    },
    { // Licenses (most common open-source per google)
        type: 'list',
        message: 'Let other developers know what license your project uses:', 
        name: 'license',
        choices: [
        'MIT',
        'Apache-2.0',
        'GPL-3.0',
        'BSD-3-Clause',
        'CC BY', 
        'CC BY-SA',
        'CC BY-NC',
        'CC BY-NC-SA',
        ]
    },
    { // GitHub username
        type: 'input',
        message: 'What is your GitHub username?', 
        name: 'github',
    },
    { // Email address  
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
    ]; 
 
// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`${fileName} file created successfully!`);
    });
  }
   
// Product: high-quality, professional README.md is generated with the title of the project and sections 
// use ${} to link the input answer variable 
// Contents = [section title with link] (#anchor for link)
// intentionally formatted the contents to ### so they were bigger than the prompt text size 
// intentionally added a stock image to each section for demonstrating the contents page links 

function generateREADME(answers) {
    return `
  # 📕 ${answers.title} 

  ## 📃 Description
  ${answers.description}
  
  ## 📖 Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
   
  # Installation 
  📝 
  ${answers.installation}
  
  # Usage
  ⚡
  ${answers.usage}
  
  # Contributing
  🏗️ 
  ${answers.contribution}
  
  # Tests
  🏆 
  ${answers.tests}

  # License
  🆔
  [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org)
    
  # Questions
  You can find my portfolio on [GitHub](https://github.com/${answers.github}).
  If you have any questions about the ${answers.title} project, please contact me via [${answers.email}](mailto:${answers.email}).  
    `;
  }

// Create the function to initialize the generator 
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateREADME(answers); //tried to add as a global and got an error 
      writeToFile("README.md", readmeContent);
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
}

// Function call to initialize the generator 
init();

//! Finished 