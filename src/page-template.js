// {
//   title: 'miraj',
//   description: 'yes',
//   languages: [
//     'HTML',       'CSS',
//     'Javascript', 'ES6',
//     'JQuery',     'Bootstrap',
//     'Node',       'APIs'
//   ],
//   tableofcontent: 'hhehe',
//   install: 'nlkfndklfnd',
//   usage: 'cdzcdcdc',
//   Licenses: 'dfcdafaf',
//   contributors: 'cdzcfdacf'
// }


module.exports = answersData => {
const { title, description, ...otherinfo } = answersData;

return `
### ${title}

## Description : 
${description}

# Languages used : 
${otherinfo.languages[i]}

# Table of Content :
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
