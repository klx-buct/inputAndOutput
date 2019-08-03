const input = require('./input');
let readline = input.readline;
let print = input.print;


function findMaxPi(numM,workDP,datas){
    let outside = [];
    let work = new Map();
    let a = [];
    //workDP.sort((a,b)=>a[0]-b[0]);
    //for(let i=1;i<workDP.length;i++){
        //workDP[i][1] = Math.max(workDP[i-1][1],workDP[i][1]);
    //}
    let len = workDP.length;
    for(let i=0;i<workDP.length;i++){
        work.set(parseInt(workDP[i][0]),parseInt(workDP[i][1]));
        a[i] = parseInt(workDP[i][0]);
    }
    let lenD = datas.length;
    for (let j = 0; j < lenD; j++) {
        a[len+j] = datas[j];
        if(!work.has(datas[j])){
            work.set(datas[j],0);
        }
    }
    a.sort((a,b)=>a-b);
    let maxData = 0;
    for (let k = 0; k < len+lenD; k++) {
        maxData = Math.max(maxData, work.get(a[k]));
        work.set(a[k],maxData);
    }
    for (let j = 0; j < lenD; j++) {
        outside.push(work.get(datas[j]));
    }
    return outside;
}
   
   
let j=0;
let numN,numM,initData;
while(!j){
    let datasOne=readline().split(' ');
    if(datasOne.length>=2){
        initData = datasOne;
        numN = parseInt(initData[0]);
        numM = parseInt(initData[1]);
        j++;
    }
}
   
let workDP = [];
let i=0;
while(i<numN){
    let tempData=readline().split(' ');
    if(tempData.length>=2){
        workDP.push([parseInt(tempData[0]),parseInt(tempData[1])]);
        i++;
    }
}
let state=0;
let datas = [];
while(!state){
    let dataDis= readline().split(' ');
    if(dataDis.length>=numM){
       state = 1;
        for(let j=0;j<numM;j++){
            datas.push(parseInt(dataDis[j]));
        }
    }
}
   
   
let outside = findMaxPi(numM,workDP,datas);
for(let k=0;k<outside.length;k++){
    print(outside[k]);
}