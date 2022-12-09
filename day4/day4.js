const _ = require("lodash");
const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    const array = data.toString().split("\n");

    //console.log(array);
    let count = 0;
    array.forEach(entry => {
        const firstElf = entry.split(",")[0],
            firstElfStart = parseInt(firstElf.split("-")[0]),
            firstElfEnd = parseInt(firstElf.split("-")[1]),
            secondElf = entry.split(",")[1],
            secondElfStart = parseInt(secondElf.split("-")[0]),
            secondElfEnd = parseInt(secondElf.split("-")[1]);

        let firstElfArray = [],
        secondElfArray = [];

        for (let i = firstElfStart; i <= firstElfEnd; i++) {
            firstElfArray.push(i);
        }

        for (let i = secondElfStart; i <= secondElfEnd; i++) {
            secondElfArray.push(i);
        }

        if (_.intersection(firstElfArray, secondElfArray).length) {
            count++;
        }

        /*
        if (firstElfStart <= secondElfStart || firstElfEnd >= secondElfEnd) {
            count++;
        } else if (secondElfStart <= firstElfStart || secondElfEnd >= firstElfEnd) {
            count++;
        }
        */
    });

    console.log(count);
});