// 278. First Bad Version
// https://leetcode.com/problems/first-bad-version/

function badStart(num) {
    let power = 0;
    let n = num;
    while (n > 0) {
        n = Math.floor(n / 10);
        power++;
    }
    const multipier = 10 ** power;
    let start = Math.round(Math.random() * multipier);

    if (start > num) {
        start = badStart(num);
    }

    return start;
}

function isFirstBad(firstBad, current) {
    if (firstBad <= current) {
        return true;
    }

    return false;
}


function firstBadVersion(num) {
    let s = 1;
    let e = num;

    const firstBad = badStart(num);
    console.log("Real First Bad Version: ", firstBad);

    while (s < e) {
        let mid = s + Math.floor((e - s) / 2);
        let isBad = isFirstBad(firstBad, mid);
        if (!isBad) {
            s = mid + 1;
        } else {
            e = mid;
        }
    }

    return e;
}



console.log("Searched First Bad Version: ", firstBadVersion(9))