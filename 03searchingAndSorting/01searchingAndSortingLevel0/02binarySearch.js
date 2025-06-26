//Given an array of integer "nums" which is sorted in ascending order, and an integer target, write a function to search target in nums. if target exists, then return its index. Otherwise, return -1.
//T.C should be O(log n)
//e.g:- I/P:- nums = [-1, 0, 3, 5, 9, 12], target = 9
//O/P:- 4

function binarySearch(arr, target) {
    let mid;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

console.log(binarySearch(nums, target));