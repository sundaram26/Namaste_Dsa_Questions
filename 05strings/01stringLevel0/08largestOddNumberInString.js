//Largest Odd Number in a String (Leetcode - 1903)
//I/P:- num = "53212"
//O/P:- "5321"

function largestOddNumber(string) {
    for (let i = string.length - 1; i >= 0; i--){
        if (string[i] % 2 === 0) {
            string = string.slice(0, -1);
        } else {
            break;
        }
    }

    return string;
}

const str = "57123";
console.log(largestOddNumber(str));