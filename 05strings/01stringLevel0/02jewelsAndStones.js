//Jewels and Stones (Leetcode - 771)
//I/P:- jewels = "aA", stones = "aAAbbbb"
//O/P:- 3


function jewelsAndStones(jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++){
        for (let j = 0; j < jewels.length; j++){
            if (jewels[j] === stones[i]) {
                count++;
            }
        }
    }
    return count;
}

function jewelsAndStones2(jewels, stones) {
    let jSet = new Set();
    for (let i = 0; i < jewels.length; i++){
        jSet.add(jewels[i]);
    }
    let count = 0;
    for (let i = 0; i < stones.length; i++){
        if (jSet.has(stones[i])) {
            count++;
        }
    }
    return count;
}

const jewels = "aA";
const stones = "aAAbbbb";

console.log(jewelsAndStones(jewels, stones));
console.log(jewelsAndStones2(jewels, stones));