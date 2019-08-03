const fs = require("fs");

let data = fs.readFileSync('./input.txt');

data = data.toString().split('\n');

function* read() {
    for(let i = 0, len = data.length; i < len; i++) {
        yield data[i];
    }
}

let go = read();

function readline() {
    return go.next().value;
}

function print(msg) {
    console.log(msg);
}

exports.readline = readline;
exports.print = print;