//Given a binary array nums, return the maximum number of consecutive 1's in the array.
//e.g:- I/P:- nums=[1, 1, 0, 1, 1, 1]; O/P:- 3

function maxConsecutiveOnes(arr) {
    let p = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0) {
            p = 0;
        } else {
            p++;
        }
        count = p > count ? p : count;
    }
    return count;
}

const arr = [1, 0, 1, 1, 0, 1];
console.log(maxConsecutiveOnes(arr));