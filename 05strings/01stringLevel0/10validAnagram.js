//Valid Anagram (Leetcode - 242)
//I/P:- s="anagram", t="nagaram"
//O/P:- true
//anagram:-word with consist same letter 


function isAnagram(s, t) {
    return s.split("").sort().join() === t.split("").sort().join();
}

function isAnagramMap(s, t) {
    if (s.length !== t.length) return false;

    const map = {};

    for (let i = 0; i < s.length; i++){
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }

    for (let i = 0; i < t.length; i++){
        if (!map[t[i]] || map[t[i]] === 0) return false;
        if (map[t[i]]) {
            map[t[i]]--;
        }
    }

    return true;
}

const s = "anagram"
const t = "nagaram"

console.log(isAnagram(s, t));
console.log(isAnagramMap(s, t));