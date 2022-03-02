const genMarkdown = (data) => {
    let licenseBadge
    switch (data.license) {
        case 'BSD 2-Clause':
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
        break;

        case 'MIT':
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;

        case 'Mozilla Public 2.0':
        licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        break;
        default:
        break;
    }   

    //Table of Contents
    let contents = `\n## Table of Contents\n`
    contents += `* [Description](#description)\n`; 
    contents += `* [Usage](#usage)\n`; 
    contents += `* [Installation](#installation)\n`; 
    contents += `* [Tests](#tests)\n`; 
    contents += `* [License](#license)\n`;
    contents += `* [Contributors](#contributors)\n`; 
    contents += `* [Questions](#questions)\n`;

    //Year for license
    let year = new Date();

    //Title of README
    let template = `# ${data.title}\n`;

    //License badge
    template += `\n${licenseBadge}\n\n---\n`;

    //Description
    template += `\n## Description\n${data.description}\n`;

    //Table of contents r/t user input
    template += contents;

    //Usage 
    template += `\n## Usage\n${data.usage}\n`;
    

    //Installation 
    template += `\n## Installation\n${data.installation}\n`;
    

    //Tests 
    template += `\n## Tests\n${data.tests}\n`;
    

    //License
    template += `\n## License \nLicensed under the ${data.license} License. Copyright \u00A9 ${year.getFullYear()}\n`; 

    //Contributors
    template += `\n## Contributors\n${data.contributors}\n`;

    //Contact 
    template += `\n## Questions\nFor any additional information or questions, please visit- \n\nGitHub Profile: (https://github.com/${data.username})\n\n or send an email: [${data.email}](mailto:${data.email})\n`;


    return template;

};


module.exports = genMarkdown;