// Leetcode 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/

function searchInRotatedSortedArray(arr, target) {
    let s = 0;
    let e = arr.length - 1;

    while (s <= e) {
        let m = s + Math.floor((e - s) / 2);
        console.log("mid: ", m,"start: ", s,"end: ", e);
        if (arr[m] === target) {
            return m;
        } else if (arr[s] <= arr[m]) {
            if (arr[m] > target && arr[s] <= target) {
                e = m - 1;
            } else {
                s = m + 1;
            }
        } else {
            if (arr[m] < target && arr[e] >= target) {
                s = m + 1;
            } else {
                e = m - 1;
            }
        }
    }


    return -1;
}

const arr = [3, 1]
console.log("Search In Rotated Sorted Array: ", searchInRotatedSortedArray(arr, 1));