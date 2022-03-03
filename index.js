const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");
var genMarkdown = require("./genMarkdown"); 
const path = require("path");


// Success message once file is created
const wellDone = chalk.greenBright(`Your README file has been created! It can be found within the "Output" folder.`);

function writeToFile(fileName, data) {
    // writing file and syncing it using path to join the current working directory using the fileName and user data.
    console.log(data)
    fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// Questions to prompt the user
function init() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "welcome",
            message: chalk.cyanBright(`Welcome to my README.md generator! A README file will be created once all the following prompts are answered. To begin hit 'y' or enter.`),
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please write a brief description of your project."
        },
        {
            type: "input",
            name: "installation",
            message: "Which command is needed to initiate the installation process? ",
        },
        {
            type: "input",
            name: "tests",
            message: "Which command is needed to run tests?"
        },
        {
            type: "input",
            name: "usage",
            message: "Please enter instructions for the usage of the repo."
        },
        {
            type: "list",
            name: "license",
            message: "Please choose the appropriate licensure for this project.",
            choices: [
                "BSD 2-Clause",
                "MIT",
                "Mozilla Public 2.0",
            ]
        },
        {
            type: "input",
            name: "contributors",
            message: "Who are the contributors of this projects?"
         }
    
    ])
    .then(function(data) {
    // message for the user
 
     console.log(wellDone);
    // calling function writeToFile(fileName, data) using "README.md" and genMarkdown(data) parameters & uses a spread opperater to spread data. 
     writeToFile("./output/README.md", genMarkdown({...data})); 

});

}
init()