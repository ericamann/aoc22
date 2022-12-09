const _ = require("lodash");
const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    const array = data.toString().split("\n"),
        directoryContents = {};

    let i = 0, currentDirectory = [];
    while (i < array.length) {
        const command = array[i++];
        if (command === "$ cd ..") {
            currentDirectory.pop();
        }
        else if (command.startsWith("$ cd")) {
            const commandPieces = command.split(" ");
            currentDirectory.push(commandPieces[2]);
            directoryContents[`${currentDirectory.join("/")}`] = [];
        } else if (command.startsWith("$ ls")) {
            for (let j = i; j < array.length; j++) {
                if (array[j].startsWith("$")) {
                    break;
                }
                directoryContents[`${currentDirectory.join("/")}`].push(array[j]);
            }
        }
    }

    const calculateDirectorySize = (currentDirectory, currentPath) => {
        let totalSize = 0;
        currentDirectory.forEach(item => {
            if (item.startsWith("dir")) {
                const path = currentPath + "/" + item.split(" ")[1];
                totalSize += calculateDirectorySize(directoryContents[path], path);
            } else {
                totalSize += parseInt(item.split(" ")[0]);
            }
        });
        return totalSize;
    }

    const sizes = _.map(directoryContents, (value, key) => {
       const size = calculateDirectorySize(value, key);
       return {size, path: key};
    }),
        spaceAvailable = 70000000 - sizes[0].size,
        spaceNeeded = 30000000 - spaceAvailable,
        directoryToRemove = _.sortBy(_.filter(sizes, s => s.size > spaceNeeded), "size")[0];

    console.log(directoryToRemove);

    /*
    let totalSize = 0;
    sizes.forEach(size => {
        if (size <= 100000) {
            totalSize += size;
        }
    })

    console.log(totalSize)
    */
});