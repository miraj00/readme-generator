// Packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
 const generatePage = require('./develop/utils/generateMarkdown.js');

// Create an array of questions for user input
const promptUser = () => {
   return inquirer.prompt ([
{
    type: 'input',
    name: 'title',
    message: 'Please Enter a Title of the Project :', 
},
{
    type: 'input',
    name: 'description',
    message: 'Please Enter a short Description about Project :',
},
{
    type: 'checkbox',
    name: 'languages',
    message: 'What coding languages or modules you used with this project ? (check all that apply)',
    choices: [ 'HTML', 'CSS', 'Javascript', 'ES6', 'JQuery', 'Bootstrap', 'Node', 'APIs'] 
},
{
    type: 'input',
    name: 'install',
    message: 'Please Enter How to Install :', 
},
{
    type: 'input',
    name: 'usage',
    message: 'Please Enter How to Use this application :',
},
{ 
    type: 'list',
    name: 'license',
    message: 'Please select Licenses From List Below :',
    choices: [ 'MIT', 'Apache', 'GPL', 'Apache-2.0', 'BSD', 'Other'] 
},
{
    type: 'input',
    name: 'contributors',
    message: 'Please Enter name of Contributors if any :',
},
{
    type: 'input',
    name: 'username',
    message: 'Please Enter Your Github Username :',
},
{
    type: 'input',
    name: 'email',
    message: 'Please Enter Your E-mail Address :',
}
   ]);
};


// Create a function to write README file
function init() {
    promptUser()
    .then(answersData => {
        fs.writeFile('./dist/README.md', generatePage(answersData), err => {
            if (err) throw err;
    })
  })
}

// Function call to initialize app
init();
