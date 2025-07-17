//Reverse String II (Leetcode - 541)
//I/P:- s="abcdefg", k=2
//O/P:- "bacdfeg"

function reverseStringII(s, k) {
    s = s.split("");
    for (let i = 0; i < s.length; i = i + (2 * k)){
        for (let j = 0; j < Math.floor(k/2); j++){
            let temp = s[j + i];
            s[j + i] = s[k + i - j - 1];
            s[k + i - j - 1] = temp;
        }
    }
    s = s.join("")

    return s;
}

const str = "abcdefghijklmnopqrstuvwxyz";
const k = 2;
console.log(reverseStringII(str, k))
