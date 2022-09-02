function longestValidParentheses(s: string): number {
    let temp: number = 0;
    let max: number = 0;
    let stack: string[] = [];
    let lenStack: number[] = [];
    for(const str of s) {
        if (str === '(') {
            if (temp > 0) {
                lenStack.push(temp);
                temp = 0;
                stack.push('#');
            }
            stack.push(str);
        } else {
            if (stack.length < 1) {
                max = Math.max(max, temp);
                temp = 0;
                continue;
            }
            // if (stack.length === 1 && stack[0] === '#') {
            //     max = Math.max(max, lenStack[0]);
            //     lenStack = [];
            //     stack = [];
            //     continue;
            // }
            let cur: string = '';
            while(cur !== '(') {
                cur = stack.pop();
                let curLen = 0;
                if (cur === '#') {
                    curLen = lenStack.pop();
                    temp += curLen;
                    if (stack.length === 0) {
                        lenStack.push(temp);
                        break;
                    }
                } else {
                    temp += 2;
                }
            }
            if (stack[stack.length - 1] === '#') {
                console.log('com');
                temp += lenStack.pop();
                stack.pop();
            }
        }
        console.log('stack', stack);
        console.log('lenStack', lenStack);
        console.log('temp', temp);
    }
    max = Math.max(max, temp);
    for(let i = 0 ; i < lenStack.length; i++) {
        max = Math.max(max, lenStack[i]);
    }
    return max;
};

console.log(longestValidParentheses(")()())()()("));