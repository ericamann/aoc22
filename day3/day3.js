const _ = require("lodash");
const fs = require("fs");

const VALUE_MAP = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52
};

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    const array = data.toString().split("\n");

    let total = 0;
    for (let i = 0; i < array.length; i+=3) {
        const elf1 = array[i].split(""),
        elf2 = array[i + 1].split(""),
        elf3 = array[i + 2].split(""),
        duplicate = _.intersection(elf1, elf2, elf3);

        console.log(duplicate)
        total += VALUE_MAP[duplicate];

    }

    /*
    array.forEach(entry => {
        const size = entry.length / 2,
         first = entry.slice(0,size),
        second = entry.slice(size);

        let duplicate;
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) >= 0) {
                duplicate = first[i];
                break;
            }
        }

        total += VALUE_MAP[duplicate]
    })
    */

    console.log(total)
});