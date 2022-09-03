function validateStackSequences(pushed: number[], popped: number[]): boolean {
    let pushIndex = 0;
    let popIndex = 0;
    const pushN = pushed.length;
    const popN = popped.length;
    const stack = new NewStack<number>();
    stack.push(pushed[0]);
    while(pushIndex < pushN || popIndex < popN) {
        if (stack.length > 0 && stack.peek() === popped[popIndex]) {
            popIndex += 1;
            stack.pop();
        } else {
            pushIndex += 1;
            if (pushIndex >= pushN) {
                break;
            }
            stack.push(pushed[pushIndex]);
        }
    }
    if (popIndex === popN) return true;
    return false;
};

interface StackInstance<T> {
    pop(): T;
    push(value: T): void;
    peek(): T;
    length: number;
}

class NewStack<T> implements StackInstance<T>{
    private stack: T[];
    constructor() {
        this.stack = [];
    }

    
    public get length(): number {
        return this.stack.length;
    }

    /**
     * pop
     */
    public pop(): T {
        return this.stack.pop();
    }

    /**
     * push
     */
    public push(value: T) {
        this.stack.push(value);
    }

    /**
     * peek
     */
    public peek(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        return this.stack[this.length - 1];
    }
}

console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]));