choices: [ 'MIT', 'Apache', 'GPL', 'Apache-2.0', 'BSD'] 

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(answersData) {
 if (answersData.name == 'MIT') {
     return x = 'MIT';
 }
if (answersData.name == 'Apache') {
     return x = 'Apache';
}
if (answersData.name == 'GPL') {
     return x = 'GPL';
}
if (answersData.name == 'Apache-2.0') {
     return x = 'Apache-2.0';
}
if (answersData.name == 'BSD') {
     return x = 'BSD';
}
if (answersData.name == 'Other') {
  return x = '';
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}





// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const { title, description, ...otherinfo } = data;
   
  renderLicenseBadge();
 
  return `
  # ${title}

  ## Table of Content :

  - [Description](https://github.com/miraj00/readme-generator#description-) 

  - [Languages Used](https://github.com/miraj00/readme-generator#languages-used-)
  
  - [How to Install](https://github.com/miraj00/readme-generator#how-to-install-)
  
  - [How to use the application](https://github.com/miraj00/readme-generator#how-to-use-the-application-)
  
  - [Licenses](https://github.com/miraj00/readme-generator#lincenses-)
  
  - [Contributors](https://github.com/miraj00/readme-generator#lincenses-)
  
  - [Questions / Reach Me at](https://github.com/miraj00/readme-generator#questions-)
  
 

  ## Description : 
  ${description}
  
  ## Languages used : 
  ${otherinfo.languages.join(', ')}
  
  ## How to Install :
  ${otherinfo.install}
  
  ## How to use the application :
  ${otherinfo.usage}

  ## Screenshot of the Project :
  ![Screenshot](assets/images/screenshot.JPG)
  
  ## Lincenses :  
   https://img.shields.io/badge/License-${x}-green   
     
  ## Contributors :
  ${otherinfo.contributors}
  
  ## Questions :
    * You can check my Github Repository at : https://github.com/${otherinfo.username}  
    * You can reach me by emailing me at : ${otherinfo.email}
  
  
`;
}

module.exports = generateMarkdown;
