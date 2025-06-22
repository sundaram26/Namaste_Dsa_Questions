//Given an array nums containing n distict numbers in the range [0, n], return the only number in the reange that is missing from the array.
//e.g:- I/P:- nums=[3, 0, 1]; O/P: 2
//explanation: n=3 since there are 3 numbers, so all numbers are in the range [0, 3]. 2 is missing number in the range since it does not appear in nums.

function missingNumber(arr) {
    let n = arr.length;
    const nSum = (n * (n + 1)) / 2;
    let sum = 0;
    for (let i = 0; i < n; i++){
        sum = sum + arr[i];
    }
    const missing = nSum - sum;

    return missing;
}

const arr = [3, 0, 1];
console.log(missingNumber(arr));