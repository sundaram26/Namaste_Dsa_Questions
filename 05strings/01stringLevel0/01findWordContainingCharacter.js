//Find Words Containing Character (Leetcode-2942)
//I/P:- words=["leet", "code"], x="e"
//O/P:- [0, 1];

function findWordContainingChar(words, x) {
    let arr = [];
    for (let i = 0; i < words.length; i++){
        for (let j = 0; j < words[i].length; j++){
            if (words[i][j] === x) {
                arr.push(i);
                break;
            }
        }
    }
    return arr;
}

const str = ["Leet", "code"];
const x = 'e';
console.log("Index of words containing Char", findWordContainingChar(str, x))