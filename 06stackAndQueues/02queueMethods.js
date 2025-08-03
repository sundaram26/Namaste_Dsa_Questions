//don't use any other function then (enque, deque, front/peek)...don't use array's and stack's method in queue.

let q = [];

q.push(1);  //enque
q.push(2);
q.push(3);
q.push(4);

q.shift(); //deque

let front = q[0] //for peek/front

console.log(q);
console.log(front);