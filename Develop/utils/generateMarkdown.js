

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

  1. [Description](#description)

  2. [Languages](#languages)
  
  3. [Installation](#installation)
  
  4. [Usage](#usage)
  
  5. [Licenses](#licenses)
  
  6. [Contributors](#contributors)
  
  7. [Questions](#questions)

  ## Description 
  ${description}
  
  ## Languages  
  ${otherinfo.languages.join(', ')}
  
  ## Installation 
  ${otherinfo.install}
  
  ## Usage
  ${otherinfo.usage}

  ## Licenses 
  ${licenseBadge} 
  <br />
   (*Note: You can get more information on license by Clicking on the License Badge above) 
     
  ## Contributors
  ${otherinfo.contributors}
  
  ## Questions

    * You can check my GITHUB REPOSITORY at : https://github.com/${otherinfo.username}  
    * You can reach me by emailing me at : ${otherinfo.email}
  
`;
}

module.exports = generateMarkdown;



