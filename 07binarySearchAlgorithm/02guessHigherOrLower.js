// Leetcode 374. Guess Number Higher or Lower
// https://leetcode.com/problems/guess-number-higher-or-lower/

function guess(num) {
    let power = 0;
    let n = num;
    while (n > 0) {
        n = Math.floor(n / 10);
        power++;
    }
    const multipier = 10 ** power;
    let pick = Math.round(Math.random() * multipier); 
    
    
    if (pick > num) {
        pick = guess(num);
    }

    return pick;
}

function guessRes(guess, pick) {
    if (guess > pick) {
        return 1;
    } else if (guess < pick) {
        return -1;
    }
    return 0;
}

function guessHigherOrLower(n) {
    let start = 0;
    let end = n;
    const val = guess(n);
    console.log("Api Number: ", val);
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let res = guessRes(val, mid);

        if (res === 0) {
            return mid;
        } else if (res === -1) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

console.log("Picked Number: ", guessHigherOrLower(45))