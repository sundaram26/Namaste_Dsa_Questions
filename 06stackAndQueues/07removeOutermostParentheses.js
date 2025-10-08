// Leetcode 1021. Remove Outermost Parentheses
// https://leetcode.com/problems/remove-outermost-parentheses/



function removeOuterParentheses(str) {
    let stack = [];
    let result = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] === '(') {
            stack.push(str[i]);
            if (stack.length > 1) {
              result = result + str[i];
            }
        } else {
            if (stack.length > 1) {
              result = result + str[i];
            }
            stack.pop();
        }
    }
    return result;
}

console.log("The String After Removing Outermost Parentheses: ", removeOuterParentheses("((()()))()()(()()())"))