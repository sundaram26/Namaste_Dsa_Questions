//Leetcode 20. Valid Parentheses
//https://leetcode.com/problems/valid-parentheses/description/

function validParentheses(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++){
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            stack.push(str[i]);
            console.log("this is stack: ", stack)
        } else {
            const top = stack.pop();
            if (!top ||
                (top === "(" && str[i] !== ")") ||
                (top === "[" && str[i] !== "]") ||
                (top === "{" && str[i] !== "}")
            ) {
                return false;
            } 
        }
    }
    return stack.length === 0;
}

console.log("This collection of parentheses is ", validParentheses("(){][]"))