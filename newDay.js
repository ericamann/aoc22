const fs = require('fs');
const path = require('path');
const axios = require("axios");

const day = process.argv.slice(2)[0];
const newDirPath = path.join(__dirname, `day${day}`);

fs.mkdir(newDirPath, (err) => {
    if (err) {
        return console.error(err);
    }

    fs.writeFile(`${newDirPath}/day${day}.js`,
'const _ = require("lodash");\n' +
'const fs = require("fs");\n\n' +
'fs.readFile("input.txt", (err, data) => {\n' +
'    if (err) throw err;\n' +
'    const array = data.toString().split("\n");' +
'\n\n' +
'});', function (err) {
        if (err) throw err;
        console.log('JS file is created successfully.');
    });

    fs.writeFile(`${newDirPath}/input.txt`, "", function (err) {
        if (err) throw err;
        console.log('Input file is created successfully.');
    });
});