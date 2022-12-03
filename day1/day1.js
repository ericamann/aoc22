const _ = require("lodash");
const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    const array = data.toString().split("\n");

    const elves = [];
    let currentCount = 0,
        max = 0;

    array.forEach(entry => {
        if (entry !== "") {
            currentCount += parseInt(entry);
        } else {
            elves.push(currentCount);
            currentCount = 0;
        }
    })

    console.log(elves);
    const sortedElves = _.reverse(_.sortBy(elves));
    console.log(sortedElves[0] + sortedElves[1] + sortedElves[2]);
  });