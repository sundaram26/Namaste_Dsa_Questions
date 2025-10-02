//Leetcode 232. Implement Queue Using Stack
//https://leetcode.com/problems/implement-queue-using-stacks/description/

class MyQueueUsingStack{
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    push(x) {
        this.s1.push(x);
        console.log(this.s1);
    }

    pop() {
      // if (this.s2.length !== 0) {
      //     return this.s2.pop();
      // }
      // console.log(this.s1.length)
      // for (let i = 0; i <= this.s1.length; i++){
      //     this.s2.push(this.s1.pop());
      // }
      // console.log("this is s2: ", this.s2);
      // console.log("this is s1: ", this.s1);
      // return this.s2.pop();

      if (this.s2.length === 0) {
        while (this.s1.length) {
          this.s2.push(this.s1.pop());
        }
      }
      console.log("this is s2: ", this.s2);
      console.log("this is s1: ", this.s1);
      return this.s2.pop();
    }

    peek() {
        if (this.s2.length === 0) {
          while (this.s1.length) {
            this.s2.push(this.s1.pop());
          }
        }
        return this.s2[this.s2.length - 1];
    }

    empty() {
        console.log("This is stack 1: ", this.s1)
        console.log("This is stack 2: ", this.s2)
        return this.s1.length === 0 && this.s2.length === 0;
    }
}

const q = new MyQueueUsingStack()

q.push(1);
q.push(2);
q.push(3);
q.push(4);
console.log(q.pop());
console.log(q.peek()); 
console.log(q.empty()); 
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.empty()); 
