//Leetcode 150. Evaluate Reverse Polish Notation
//https://leetcode.com/problems/evaluate-reverse-polish-notation/


function evaluateReversePolishNotaion(arr) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
 
        if (
            arr[i] !== "+" &&
            arr[i] !== "*" &&
            arr[i] !== "/" &&
            arr[i] !== "-" 
        ) {
            stack.push(arr[i]);
        } else {
            const first = parseInt(stack[stack.length - 1]);
            stack.pop();
            const second = parseInt(stack[stack.length - 1]);
            stack.pop();
            let third = 0;
            if (arr[i] === "+") {
                third = second + first;
            } else if (arr[i] === "-") {
                third = second - first;
            } else if (arr[i] === "/") {
                third = Math.floor(second / first);

            } else if (arr[i] === "*") {
                third = second * first;
            }
            stack.push(third);
        }
    }
    return stack[stack.length - 1];
}

console.log("The answer of evaluation is: ", evaluateReversePolishNotaion(["2", "1", "+", "3", "*"]));