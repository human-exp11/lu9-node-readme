const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");
const genMarkdown = require("./genMarkdown"); 

// A welcome message for the user
const welcome = [
    {
        type: "confirm",
        name: "welcome",
        message: chalk.cyanBright(`Welcome to my README.md generator! A README file will be created once all the following prompts are answered. To begin hit 'y' or enter.`),
    },
];

// Questions to prompt the user
const promptUser= ()=> {
    return inquirer.prompt([
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
        },
    ]);
};

// Success message once file is created
const wellDone = chalk.greenBright(`Your README file has been created! It can be found within the "Output" folder.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// `);

// Function to create README.md file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(wellDone)
    );
} 

//Function to initialize 
const init = async () => {
    try {
       const main =  await inquirer.prompt(welcome);
        const data = await promptUser ();
        writeToFile("output/readme.md", genMarkdown(data));    
    } catch (err) {
        console.log(err);
    }
}

init();
