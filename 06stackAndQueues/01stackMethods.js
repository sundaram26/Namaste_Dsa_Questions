//don't use queue's and array's method in stack
stack[3] //this will be consider as invalid stack operation...it will be consider as array operation.

let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();

console.log(stack[stack.length - 1]);

console.log(stack);
