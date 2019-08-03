const input = require('./input');
let readline = input.readline;
let print = input.print;


let M, N, i=0, Di = [], Pi = {};
let line = readline().split(' ');
N = parseInt(line[0]);
M = parseInt(line[1]);
while(i < N) {
    line = readline().split(' ');
    if(line.length >= 2) {
        Di[i] = parseInt(line[0]);
        Pi[Di[i]] = parseInt(line[1]);
        i++;
    }
}
updatePi();
while(true) {
    line = readline().split(' ');
    if(line.length === M) {
        break;
    }
}
for(let i = 0, len = line.length; i < len; i++) {
    console.log(findMax( parseInt(line[i]) , Pi, Di));
}
function updatePi() {
    Di.sort((a, b) => a-b);
    for(let i = 0, len = Di.length; i < len; i++) {
        Pi[Di[i]] = i===0 || Pi[Di[i]] >= Pi[Di[i-1]] ? Pi[Di[i]] : Pi[Di[i-1]];
    }
}
function findMax(Ai, Pi, Di) {
    let beg = 0, end = Di.length-1;
    while(beg<=end) {
        let mid = parseInt((beg+end)/2);
        if(Ai === Di[mid]) return Pi[Di[mid]];
        
        if(Ai < Di[mid]) {
            end = mid-1;
        }else {
            beg = mid+1;
        }
    }
    if(beg === 0) return 0;
    return Pi[Di[beg-1]];
}