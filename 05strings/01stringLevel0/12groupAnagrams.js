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


const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagram(strs));