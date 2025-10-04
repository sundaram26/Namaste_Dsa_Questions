//155. Min Stack
//https://leetcode.com/problems/min-stack/description/

class MinStack{
    constructor() {
        this.s = [];
    }

    push(x) {
        if (this.s.length === 0) {
            this.s.push([x, x])
        } else {
            const top = this.s[this.s.length - 1];
            const prevMin = top[1];
            const newMin = Math.min(x, prevMin);
            this.s.push([ x, newMin ]);
        }
        console.log(this.s);
    }

    pop() {
        this.s.pop();
        console.log(this.s);
    }

    top() {
        return this.s[this.s.length - 1][0];
    }

    getMin() {
        return this.s[this.s.length - 1][1];
    }
}


const s = new MinStack();
s.push(4);
s.push(-3);
s.push(1);
s.push(4);
s.pop();
s.pop();
s.push(-6);
s.push(10);
console.log(s.top());
console.log(s.getMin());