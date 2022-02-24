const inquirer = require('inquirer');
const fs = require('fs');

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
                "BSD",
                "GPL",
                "MIT",
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
    ]);
};

const init = () => {
    promptUser()
      //writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync("README.md", generateREADME(answers)))
      .then(() => console.log("README.md file successfully created."))
      .catch((err) => console.error(err));
};    


init();
