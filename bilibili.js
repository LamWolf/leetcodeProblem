function bilibili(line) {
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
    };
    const bracketArr = curLine.split('');
    let index = 0;
    let stack = [];
    for (let i = 0; i < bracketArr.length; i++) {
        index += 1;
        if (bracketArr[i] === '(' || bracketArr[i] === '{' || bracketArr[i] === '[') {
            stack.push(bracketArr[i]);
        }
        else {
            const lastIndex = stack.length - 1;
            const lastChar = stack[lastIndex];
            if (lastmap[bracketArr[i]] === lastChar) {
                stack.pop();
            }
            else {
                while (lastmap[bracketArr[i]] !== lastChar) {
                    console.log(`${premap[lastChar]},${index}`);
                    stack.pop();
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
