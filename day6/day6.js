const _ = require("lodash");
const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    const array = data.toString().split("");

    let i;
    for (i = 0; i < array.length; i++) {
        console.log(array.slice(i, i + 14));
        if (_.uniq(array.slice(i, i + 14)).length === 14) {
            console.log("all unique")
            break;
        }

    }

    console.log(i + 14);

});