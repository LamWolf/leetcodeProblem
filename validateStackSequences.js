function validateStackSequences(pushed, popped) {
    let pushIndex = 0;
    let popIndex = 0;
    const pushN = pushed.length;
    const popN = popped.length;
    const stack = new NewStack();
    stack.push(pushed[0]);
    while (pushIndex < pushN || popIndex < popN) {
        console.log(stack.length);
        if (stack.length > 0 && stack.peek() === popped[popIndex]) {
            popIndex += 1;
            stack.pop();
        }
        else {
            pushIndex += 1;
            if (pushIndex >= pushN) {
                break;
            }
            stack.push(pushed[pushIndex]);
        }
    }
    console.log(popIndex);
    if (popIndex === popN)
        return true;
    return false;
}
;
class NewStack {
    constructor() {
        this.stack = [];
    }
    get length() {
        return this.stack.length;
    }
    /**
     * pop
     */
    pop() {
        return this.stack.pop();
    }
    /**
     * push
     */
    push(value) {
        this.stack.push(value);
    }
    /**
     * peek
     */
    peek() {
        if (this.length === 0) {
            return undefined;
        }
        return this.stack[this.length - 1];
    }
}
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
