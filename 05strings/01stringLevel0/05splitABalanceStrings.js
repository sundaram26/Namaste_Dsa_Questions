//split a string in balanced strings (Leetcode - 1221)
//I/P:- s = "RLRRLLRLRL"
//O/P:-4  -----> RL, RRLL, RL, RL

//I/P:- s = "RLRRRLLRLL"
//O/P:- 2 -----> RL, RRRLLRLL

function splitBalanceStrings(string) {
    let rCount = 0;
    let lCount = 0;
    let count = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] === 'R') rCount++;
        if (string[i] === 'L') lCount++;
        if (rCount === lCount && rCount !== 0 && lCount !== 0) {
            count++;
            rCount = 0;
            lCount = 0;
        }
    }
    return count;
}

function splitBalanceStrings2(string) {
    let rlCount = 0;
    let count = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] === 'R') {
            rlCount++;
        } else {
            rlCount--;
        }
        if (rlCount === 0) {
            count++;
        }
    }
    return count;
}

console.log(splitBalanceStrings("RLRRLLRLRL"));
console.log(splitBalanceStrings2("RLRRLLRLRL"));
console.log(splitBalanceStrings("RLRRRLLRLL"));
console.log(splitBalanceStrings2("RLRRRLLRLL"));