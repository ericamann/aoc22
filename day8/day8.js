const _ = require("lodash");
const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    const array = data.toString().split("\n");

    const rowCount = array.length,
        colCount = array[0].length;

    let maxScore = 0;

    for (let i = 1; i < rowCount - 1; i++) {
        const row = array[i];
        for (let j = 1; j < colCount -1 ; j++) {
            const tree = parseInt(row[j]);

            let topView = 0, bottomView = 0, leftView = 0, rightView = 0;

            // top
            for (let k = i - 1; k >= 0; k--) {
                topView++;
                if (parseInt(array[k][j]) >= tree) {
                    break;
                }
            }

            // bottom
            for (let k = i + 1; k < rowCount; k++) {
                bottomView++;
                if (parseInt(array[k][j]) >= tree) {
                    break;
                }
            }

            // left
            for (let k = j - 1; k >= 0; k--) {
                leftView++;
                if (parseInt(array[i][k]) >= tree) {
                    break;
                }
            }

            // right
            for (let k = j + 1; k < colCount; k++) {
                rightView++;
                if (parseInt(array[i][k]) >= tree) {
                    break;
                }
            }

            console.log(`top: ${topView}, bottom: ${bottomView}, left: ${leftView}, right: ${rightView}`);
            const thisScore = topView * bottomView * leftView * rightView;
            console.log(thisScore);
            if (thisScore > maxScore) {
                maxScore = thisScore;
            }
            console.log("****")
        }
    }

    console.log(maxScore)
});