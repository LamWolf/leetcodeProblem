function bilibili(line: string) {
    let curLine = line;
    const lastmap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    const premap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const bracketArr = curLine.split('');
    let index: number = 0;
    let stack: string[] = [];
    for(let i = 0; i < bracketArr.length; i++) {
        index += 1;
        if (bracketArr[i] === '(' || bracketArr[i] === '{' || bracketArr[i] === '[') {
            stack.push(bracketArr[i]);
        } else {
            const lastIndex = stack.length - 1;
            let lastChar = stack[lastIndex];
            if (lastmap[bracketArr[i]] === lastChar) {
                stack.pop();
            } else {
                while(lastmap[bracketArr[i]] !== lastChar) {
                    console.log(`${premap[lastChar]},${index}`);
                    stack.pop();
                    const newlastIndex = stack.length - 1;
                    lastChar = stack[newlastIndex]
                    index += 1;
                }
            }
        }
    }
    if (stack.length > 0) {
        console.log(`${premap[stack[0]]},${index + 1}`);
    }
}

bilibili('(){');