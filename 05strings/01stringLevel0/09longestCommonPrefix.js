//Longest Common Prefix:- (Leetcode - 14)
//I/P:- strs = ["flowers", "flows", "flight"]
//O/P:- "fl"

function longestCommonPrefix(arr) {
    for (let i = 0; i < arr[0].length; i++){
        let ch = arr[0][i];
        for (let j = 1; j < arr.length; j++){
            if (ch !== arr[j][i] || i === arr[j].length) {
                return arr[0].substring(0, i);
            }
        }
    }
    return arr[0];
}

// const strs = ["flowers", "flows", "flight"]
const strs = [""]
console.log(longestCommonPrefix(strs));