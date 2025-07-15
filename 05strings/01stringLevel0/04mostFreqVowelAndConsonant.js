//Find Most Frequent Vowel and Consonant (Leetcode-3541)
//I/P:- s = "successes";
//O/P:- 6 ----> vowels:- 1u, 2e and consonants:- 4s, 2c ====> 4s + 2e = 6;

function maxFreqSum(s) {
    const newMap = {};
    for (let i = 0; i < s.length; i++){
        if (newMap[s[i]]) {
            newMap[s[i]]++;
        } else {
            newMap[s[i]] = 1;
        }
    }

    let maxVow = 0;
    let maxCons = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    for (const char in newMap) {
        if (vowels.has(char)) {
            maxVow = Math.max(maxVow, newMap[char]);
        } else {
            maxCons = Math.max(maxCons, newMap[char]);
        }
        // console.log("Cons: ", maxCons, "vow: ", maxVow);
    }

    return (maxCons + maxVow);
}

const str = "successes";
console.log(maxFreqSum(str));