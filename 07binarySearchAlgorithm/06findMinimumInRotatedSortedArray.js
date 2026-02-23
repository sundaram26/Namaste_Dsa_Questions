// Leetcode 153. Find Minimum in Rotated Sorted Array`
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

function findMinimumRotatedSortedArray(arr) {
    let s = 0;
    let e = arr.length - 1;

    while (s < e) {
        let mid = s + Math.floor((e - s) / 2);
        if (arr[mid] > arr[e]) {
            s = mid + 1;
        } else {
            e = mid;
        }
    }

    return arr[e];
}

const arr = [67, 89, 92, 112, 11, 23];
console.log("Minimum Elemement from this array: ", findMinimumRotatedSortedArray(arr));