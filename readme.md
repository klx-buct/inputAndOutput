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
- index.js
    ```js
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
    ```
- input.txt
    ```
    3 3 
    1 100 
    10 1000 
    1000000000 1001 
    9 10 1000000000
    ```