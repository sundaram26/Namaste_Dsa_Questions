// Leetcode 503. Next Greater Element II
// https://leetcode.com/problems/next-greater-element-ii/

//Method - 1:- By doubling the array.
const nextGreaterElem2 = (arr) => {
    let newArr = [...arr, ...arr];
    const n = newArr.length

    let stack = [];
    let ans = Array(n).fill(-1);

    stack.push(newArr[n - 1]);

    for (let i = n - 2; i >= 0; i--){
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (newArr[i] < top) {
                ans[i] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(newArr[i]);
    }

    return ans.slice(0, n/2);
}

//Method - 2:- By taking remainder(i%n)
const nextGreaterElem2M2 = (arr) => {
    const n = arr.length;
    let stack = [];
    let ans = Array(n).fill(-1);
    stack.push(arr[n - 1]);

    for (let i = 2 * n - 2; i >= 0; i--){
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i%n] < top) {
                ans[i%n] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(arr[i%n]);
    }

    return ans;
}

console.log("This is ans: ", nextGreaterElem2([1, 2, 1]));
console.log("This is ans from method 2: ", nextGreaterElem2M2([1, 2, 1]));