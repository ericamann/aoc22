const _ = require("lodash");
const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    const array = data.toString().split("\n");

    let stacks, directionIndex;
    array.forEach((entry, index) => {
        if (entry[1] === "1") {
            directionIndex = index;

            const stackList = entry.split(" "),
                stackCount = parseInt(stackList[stackList.length - 1]);

            stacks = Array.from(Array(stackCount), () => []);
        }
    });

    for (let i = 0; i < directionIndex; i++) {
        const entry = array[i];
        for (let j = 0; j < entry.length; j += 4) {
            const chunk = entry.slice(j, j + 3);
            if (chunk[1] !== " ") {
                const stackIndex = j / 4;
                stacks[stackIndex].push(chunk[1]);
            }
        }
    }

    for (let i = directionIndex + 2; i < array.length; i++) {
        const entry = array[i],
            instructions = entry.split(" "),
            count = instructions[1],
            startStack = instructions[3] - 1,
            endStack = instructions[5] - 1;

        const elementsToMove = stacks[startStack].splice(0, count);

        stacks[endStack].splice(0, 0, ...elementsToMove)
        /*
        elementsToMove.forEach(element => {
            stacks[endStack].unshift(element);
        })
        */

    }

    console.log(stacks);

    let returnValue = "";
    stacks.forEach(stack => {
        returnValue += stack[0];
    })
    console.log(returnValue);

});