function Q1(len, time, str) {
    const strArray = str.split('');
    let curTime = time;
    const boundaryCode = 'a'.charCodeAt(0);
    let notOverMax = 0;
    let codeArray = strArray.map(item => {
        const code = item.charCodeAt(0);
        if (code <= time + boundaryCode) {
            notOverMax = Math.max(code, notOverMax);
        }
        return code;
    });
    while (curTime > 0 && notOverMax > boundaryCode) {
        codeArray = codeArray.map(item => {
            let newItem = item;
            if (newItem === notOverMax) {
                newItem -= 1;
            }
            return newItem;
        });
        curTime--;
        notOverMax--;
    }
    if (curTime > 0) {
        let firstNotMinCode = 0;
        codeArray.some(item => {
            if (item !== boundaryCode) {
                firstNotMinCode = item;
                return true;
            }
            return false;
        });
        console.log(firstNotMinCode);
        console.log('f'.charCodeAt(0));
        while (curTime > 0) {
            codeArray = codeArray.map(item => {
                let newItem = item;
                if (newItem === firstNotMinCode) {
                    newItem -= 1;
                }
                return newItem;
            });
            firstNotMinCode--;
            curTime--;
        }
    }
    return codeArray.map(item => String.fromCharCode(item)).join('');
}
console.log(Q1(4, 5, 'fgde'));
