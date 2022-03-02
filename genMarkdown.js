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
    };   

    let year = new Date();

    return `

   ##  ${data.title}\n`

   `

    \n## Table of Contents\n
    * [Description](#description)\n
    * [Usage](#usage)\n 
    * [Installation](#installation)\n
    * [Tests](#tests)\n
    * [License](#license)\n
    * [Contributors](#contributors)\n
    * [Questions](#questions)\n`
    
    `
    

  ${licenseBadge}\n\n---\n

    ---
    
   \n## Description\n${data.description}\n

  ---

  \n ## Usage\n${data.usage}\n
    
  ---

   \n## Installation\n${data.installation}\n
    
   ---

    \n## Tests\n${data.tests}\n
 
    ---

    \n## License \nLicensed under the ${data.license} License. Copyright \u00A9 ${year.getFullYear()}\n

    ---

    \n## Contributors\n${data.contributors}\n

    ---

    \n## Questions\nFor any additional information or questions, please visit- \n\nGitHub Profile: (https://github.com/${data.username})\n\n or send an email: [${data.email}](mailto:${data.email})\n`


};


module.exports = genMarkdown;