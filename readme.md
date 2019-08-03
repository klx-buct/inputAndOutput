# 目的
&emsp;&emsp;为了让牛客网上编程系统采用v8引擎时能够在本地调试代码, 手动写了readline和print函数实现输入输出
# 使用方式
1. 在input.txt内输入内容
2. 在主文件的头部加入如下代码
    ```js
    const input = require('./input');
    let readline = input.readline;
    let print = input.print;
    ```
3. 正常使用readline\print写代码即可
# 例子
- [牛牛找工作](https://www.nowcoder.com/practice/46e837a4ea9144f5ad2021658cb54c4d?tpId=98&tqId=32824&tPage=1&rp=1&ru=/ta/2019test&qru=/ta/2019test/question-ranking)
- index.js(运行通过代码复制于牛客网**一碗凉皮2020**兄弟)
    ```js
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
    ```
- input.txt
    ```
    3 3 
    1 100 
    10 1000 
    1000000000 1001 
    9 10 1000000000
    ```