const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const outputFile = (file) => {

    const pathToFile = path.join(__dirname,
        file
    );

    console.log('Trying to get file :::', pathToFile);
    console.log('');

    if (fs.existsSync(pathToFile)) {

        // set the output theme
        markshell.setTheme(theme);

        // print markdown file
        markshell.toConsole(pathToFile);

    } else {

        console.log(
            `File ${pathToFile} does not exist`
        );

    }

}

const markshell = require(process.cwd() + '/lib/index');

// get default theme
var theme = markshell.getTheme();
// theme.sourceCodeTheme = theme.availableSourceThemes.TOMORROW;
// console.log(theme.allThemes);

// console.log(Object.keys(theme));
// console.log(theme);

theme.indents.definitionList = 0;
theme.indents.blockquote = 20;

// define headline format
theme.headline = chalk.bold.keyword('lime');

// define bold text layout
theme.bold = chalk.bold.keyword('white');

// define italic text
theme.italic = chalk.italic.green;

// define strikethrough style
theme.strikethrough = chalk.strikethrough.redBright;

// define code output
theme.code = chalk.bold.whiteBright;

// define inline code output
theme.inlineCode = chalk.bold.keyword('lightblue');

// define blockquote style
theme.blockQuote = chalk.bold.keyword('pink');
theme.useAdmonitions = true;

outputFile('../samples/sample.md');
outputFile('../samples/test.md');
outputFile('../samples/admonitions.md');