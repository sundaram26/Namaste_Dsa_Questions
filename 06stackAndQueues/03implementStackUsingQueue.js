//Leetcode 225. Implement Stack using Queues(two queue)
//https://leetcode.com/problems/implement-stack-using-queues/description/

// let MyStack = function () {
//     this.q1 = [];
//     this.q2 = [];
// }

// MyStack.prototype.push = function (x) {
    
// }

class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x) {
        this.q1.push(x);
    }

    pop() {
        console.log("This is q1: ", this.q1);
        console.log("This is q2: ", this.q2);
        let n = this.q1.length;
        for (let i = 0; i < n - 1; i++){
            // const elem = this.q1.shift();
            // this.q2.push(elem);
            this.q2.push(this.q1.shift());
        }
        const elem = this.q1.shift();
        const temp = this.q2;
        this.q2 = this.q1;
        this.q1 = temp;
        console.log("This is q1: ", this.q1);
        console.log("This is q2: ", this.q2);
        return elem;
    }

    top() {
        const n = this.q1.length;
        for (let i = 0; i < n - 1; i++){
            this.q2.push(this.q1.shift());
        }
        const frontElem = this.q1[0];
        this.q2.push(this.q1.shift());
        const temp = this.q1;
        this.q1 = this.q2;
        this.q2 = temp;

        return frontElem;
    }

    isEmpty() {
        if (this.q1.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

let s1 = new MyStack();

s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
console.log(s1.pop());
console.log(s1.top());
console.log(s1.isEmpty());
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.isEmpty());
