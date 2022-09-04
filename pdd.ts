function Q1(len: number, time: number, str: string): string {
    const strArray: string[] = str.split('');
    let curTime: number = time;
    const boundaryCode = 'a'.charCodeAt(0);
    let notOverMax: number = 0;
    let codeArray: number[] = strArray.map(item => {
        const code: number = item.charCodeAt(0);
        if (code <= time + boundaryCode) {
            notOverMax = Math.max(code, notOverMax);
        }
        return code;
    });
    while(curTime > 0 && notOverMax > boundaryCode) {
        codeArray = codeArray.map(item => {
            let newItem: number = item;
            if (newItem === notOverMax) {
                newItem -= 1;
            }
            return newItem;
        })
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
        })
        while(curTime > 0) {
            codeArray = codeArray.map(item => {
                let newItem: number = item;
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