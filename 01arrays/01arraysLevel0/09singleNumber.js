//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//implement solution with linear runtime compelexity and use only constant extra space.
//I/P:- nums = [2, 2, 1], O/P:- 1

//Method-1:-with T.C:O(n) and S.C:O(n)
function singleNumber(nums) {
    let hash = {};

    for (let i = 0; i < nums.length; i++){
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }

    for (let i = 0; i < nums.length; i++){
        if (hash[nums[i]] == 1) {
            return nums[i];
        }
    }
}

//M-2: using XOR
function singleNumber2(nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i];
    }
    return xor;
}



const arr = [4, 1, 2, 1, 2];
console.log(singleNumber(arr));
console.log(singleNumber2(arr));