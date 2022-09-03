function dailyTemperatures(temperatures) {
    let n = temperatures.length;
    let temperatureArray = new Array(101);
    for (let i = 0; i < 101; i++) {
        temperatureArray[i] = new Array();
    }
    // 保存各个温度的坐标
    for (let i = 0; i < n; i++) {
        temperatureArray[temperatures[i]].push(i);
    }
    let res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let curTem = temperatures[i];
        for (let t = curTem + 1; t < 101; t++) {
            let indexLen = temperatureArray[t].length;
            if (indexLen < 1)
                continue;
            let curIndex = 0;
            if (indexLen > 0) {
                let j = 0;
                console.log(`tem${t}`, temperatureArray[t]);
                while (curIndex <= i && j < indexLen) {
                    curIndex = temperatureArray[t][j];
                    j++;
                }
            }
            if (curIndex > i) {
                res[i] = curIndex - i;
                break;
            }
        }
    }
    return res;
}
;
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
