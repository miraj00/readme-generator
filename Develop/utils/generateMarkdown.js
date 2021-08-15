choices: [ 'MIT', 'Apache', 'GPL', 'Apache-2.0', 'BSD'] 

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
     console.log(license);
  
 
 if (license == 'MIT') {
     return '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
 }
if (license == 'GPL') {
     return '[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
}
if (license == 'Apache-2.0') {
     return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
}
if (license == 'BSD') {
     return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
}
if (license == 'Other') {
     return '';
}
}


// Function to generate markdown for README :
function generateMarkdown(data) {

  const { title, description, ...otherinfo } = data;
   
  const license = otherinfo.license;
  const licenseBadge = renderLicenseBadge(license);
  console.log(licenseBadge);
 
  return `
  # ${title}   ${licenseBadge}

  ## Table of Content :

  1. [Description](https://github.com/miraj00/readme-generator#description-) 

  2. [Languages Used](https://github.com/miraj00/readme-generator#languages-used-)
  
  3. [How to Install](https://github.com/miraj00/readme-generator#how-to-install-)
  
  4. [How to use the application](https://github.com/miraj00/readme-generator#how-to-use-the-application-)
  
  5. [Licenses](https://github.com/miraj00/readme-generator#lincenses-)
  
  6. [Contributors](https://github.com/miraj00/readme-generator#lincenses-)
  
  7. [Questions / Reach Me](https://github.com/miraj00/readme-generator#questions-)
  
 

  ## Description : 
  ${description}
  
  ## Languages used : 
  ${otherinfo.languages.join(', ')}
  
  ## How to Install :
  ${otherinfo.install}
  
  ## How to use the application :
  ${otherinfo.usage}

  ## Screenshot of the Project :
  ![Screenshot](./screenshot.JPG)
  
  ## Lincenses :  
  ${licenseBadge}
     
  ## Contributors :
  ${otherinfo.contributors}
  
  ## Questions / Reach Me :
    * You can check my GITHUB REPOSITORY by Clicking Here : https://github.com/${otherinfo.username}  
    * You can reach me by emailing me at : ${otherinfo.email}
  
`;
}

module.exports = generateMarkdown;



