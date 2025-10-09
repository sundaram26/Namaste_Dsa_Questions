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

function removeOuterParentheses2(str) {
  let result = "";
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] === '(') {
      count++;
      if (count > 1) {
        result = result + str[i];
      }
    } else {
      if (count > 1) {
        result = result + str[i];
      }
      count--;
    }
  }
  return result;
}

console.log("The String After Removing Outermost Parentheses: ", removeOuterParentheses("((()()))()()(()()())"))
console.log("The String After Removing Outermost Parentheses: ", removeOuterParentheses2("((()()))()()(()()())"))