function decodeString(s: string): string {
    let stack: string[] = [];
    let letters: string[] = [];
    let numbers: string[] = [];
    let res: string = '';
    let countTemp: string = '';
    let letterTemp: string = '';
    for(const str of s) {
        if(str === ']') {
            // console.log(stack);
            let cur = stack.pop();
            let temp = '';
            while(cur !== '[') {
                temp = cur + temp;
                cur = stack.pop();
            }
            letterTemp = temp;
            cur = stack.pop();
            let tempNum = '';
            while(/[0-9]/.test(cur)) {
                tempNum = cur + tempNum;
                cur = stack.pop();
            }
            console.log('cur', cur);
            console.log(tempNum);
            if (cur !== undefined) {
                stack.push(cur);
            }
            let count = stringToNumber(tempNum);
            console.log(count);
            let tempStr = combineLetter(temp, count);
            // console.log(tempStr);
            stack.push(tempStr);

            // let curCount: number = stringToNumber(numbers.pop());
            // for(let i = 0; i < curCount - 1; i++) {
            //     let curWord = combineLetter(letterTemp, curCount);
            //     if (letters.length > 0) {
            //         letterTemp = letters.pop() + curWord;
            //     } else {
            //         res = res + curWord;
            //         letterTemp = '';
            //     }
            // }
            // console.log(stack);
        } else {
            stack.push(str);
        //     if(/[0-9]/.test(str)) {
        //     if(letterTemp.length > 0) {
        //         letters.push(letterTemp);
        //         letterTemp = '';
        //     }
        //     countTemp = countTemp + str;
        // }
        // if(str === '[') {
        //     numbers.push(countTemp);
        //     countTemp = '';
        // }
        // if(/[a-z]/.test(str)) {
        //     if (numbers.length < 1) {
        //         res = res + str;
        //     } else {
        //         letterTemp = letterTemp + str;
        //     }
        // }
        }
    }
    // if (letterTemp.length > 0) res = res + letterTemp;
    res = stack.join('');
    return res;
};

function stringToNumber(str: string): number {
    return Number(str);
}

function combineLetter(str: string, num: number): string {
    let res = '';
    for(let i = 0; i < num; i++) {
        res += str;
    }
    return res;
}

console.log(decodeString("3[a]2[bc]"));