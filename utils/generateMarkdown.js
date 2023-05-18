// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  
  const licenseTypes = ['MIT', 'Apache', 'GPL', 'BSD'];
  const formattedLicense = license.replace(/\s+/g, '').toUpperCase();
  
  if (licenseTypes.includes(formattedLicense)) {
    return `https://img.shields.io/badge/license-${formattedLicense}-green`;
  }
  
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  
  const licenseTypes = ['MIT', 'Apache', 'GPL', 'BSD'];
  const formattedLicense = license.replace(/\s+/g, '').toUpperCase();
  
  if (licenseTypes.includes(formattedLicense)) {
    return `https://opensource.org/licenses/${formattedLicense}`;
  }
  
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  
  const licenseTypes = ['MIT', 'Apache', 'GPL', 'BSD'];
  const formattedLicense = license.replace(/\s+/g, '').toUpperCase();
  
  if (licenseTypes.includes(formattedLicense)) {
    return `## License

This project is licensed under the [${formattedLicense} License](${renderLicenseLink(license)})`;
  }
  
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderContributingSection(data.contributing)}
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderContributingSection(data.contributing)}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

${renderLicenseSection(data.license)}

## Questions

If you have any questions about the repo, open an issue or contact [${data.username}](https://github.com/${data.username}) directly at ${data.email}.
`;
}

module.exports = generateMarkdown;
// A special object in Node.js that defines the module's public interface, which is the part of the module that other modules can access and use.

// In this case, module.exports = generateMarkdown is setting the value of module.exports to the generateMarkdown function. 
// This means that when another module requires the module that exports generateMarkdown, 
// it can access and use the generateMarkdown function as follows:

// const generateMarkdown = require('./generateMarkdown');

// const data = {...}; // some data object
// const markdown = generateMarkdown(data);

// console.log(markdown); // output generated markdown

//This allows other modules to use the generateMarkdown function as a function that generates markdown for a README, 
//without having to know or understand the implementation details of the generateMarkdown function. 
//It also allows for more modular and reusable code.
