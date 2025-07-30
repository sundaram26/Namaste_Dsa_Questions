//Group Anagrams(Leetcode-49)
//I/P:- strs=["eat", "tea", "tan", "ate", "nat", "bat"]
//O/P:-[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

function groupAnagram(strs) {
    const sortedMap = {};
    for (let i = 0; i < strs.length; i++){
        let sortedStr = strs[i].split("").sort().join("");
        if (!sortedMap[sortedStr]) {
            sortedMap[sortedStr] = [strs[i]];
        } else if (sortedMap[sortedStr]) {
            // sortedMap[sortedStr] = [...sortedMap[sortedStr], strs[i]];
            sortedMap[sortedStr].push(strs[i]);
        }
    }

    return Object.values(sortedMap);
}


function groupAnagram2(strs) {
    const map = {};
    for (let i = 0; i < strs.length; i++){
        let alphaCount = Array(26).fill(0);
        for (let j = 0; j < strs[i].length; j++){
            let index = strs[i][j].charCodeAt() - 'a'.charCodeAt();
            alphaCount[index]++;
        } 
        if (!map[alphaCount]) {
            map[alphaCount] = [strs[i]];
        } else {
            map[alphaCount].push(strs[i]);
        }
    }

    return Object.values(map);
}


const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagram(strs));
console.log(groupAnagram2(strs));