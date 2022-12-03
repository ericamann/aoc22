const _ = require("lodash");
const fs = require("fs");

const SCORE_MAP = {
    "X": 0, // LOSE
    "Y": 3, // DRAW
    "Z": 6  // WIN
},
MOVE_MAP = {
    "A": 1, // ROCK
    "B": 2, // PAPER
    "C": 3  // SCISSORS
}

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    const array = data.toString().split("\n");

    let score = 0;
    array.forEach(round => {
        const theirMove = round.split(" ")[0],
            goal = round.split(" ")[1];

        let roundScore = SCORE_MAP[goal],
            myMove;
        switch (theirMove) {
            case "A": // ROCK
                if (goal === "X") { // LOSE
                    myMove = "C";
                } else if (goal === "Y") { // DRAW
                    myMove = "A";
                } else if (goal === "Z") { // WIN
                    myMove = "B";
                }
                break;
            case "B": // PAPER
                if (goal === "X") { // LOSE
                    myMove = "A";
                } else if (goal === "Y") { // DRAW
                    myMove = "B";
                } else if (goal === "Z") { // WIN
                    myMove = "C";
                }
                break;
            case "C": // SCISSORS
                if (goal === "X") { // LOSE
                    myMove = "B";
                } else if (goal === "Y") { // DRAW
                    myMove = "C";
                } else if (goal === "Z") { // WIN
                    myMove = "A";
                }
                break;
        }
        console.log(myMove);
        roundScore += MOVE_MAP[myMove];
        console.log(roundScore);
        score += roundScore;
    });

    console.log(score);
});