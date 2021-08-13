// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

// title: 'miraj',
// description: 'pp',
// languages: [ 'HTML', 'CSS', 'Javascript', 'Bootstrap' ],
// tableofcontent: 'sdssss',
// install: '   sassass',
// usage: 'sassxss',
// Licenses: 'sssss',
// contributors: 'ssss',
// username: 'kkkk',
// email: 'miraj00@gmail.com'
// }


function generateMarkdown(data) {

  const { title, description, ...otherinfo } = data;
 
  return `
  
  # ${title}
  
  ## Description : 
  ${description}
  
  ### Languages used : 
  ${otherinfo.languages.join(',')}
  
  ### Table of Content :
  ${otherinfo.tableofcontent} 
  
  # How to Install :
  ${otherinfo.install}
  
  # How to use the application :
  ${otherinfo.usage}
  
  # Lincenses :
  ${otherinfo.Licenses}
    
  # Contributors :
  ${otherinfo.contributors}
  
  # Questions :
    * You can check my Github Repository at : https://github.com/${otherinfo.username}  
    * You can reach me by emailing me at : ${otherinfo.email}
  
`;
}

module.exports = generateMarkdown;
