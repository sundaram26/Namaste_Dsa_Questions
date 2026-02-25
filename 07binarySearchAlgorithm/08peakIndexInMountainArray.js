// Leetcode 852. Peak Index in a Mountain Array
// https://leetcode.com/problems/peak-index-in-a-mountain-array/

function peakIndexInMountainArray(arr) {
    let s = 0;
    let e = arr.length - 1;

    while (s < e) {
        let mid = s + Math.floor((e - s) / 2);

        if (arr[mid] < arr[mid + 1]) {
            s = mid + 1;
        } else {
            e = mid;
        }
    }

    return e;
}

const arr = [0, 1, 2, 3, 4, 5, 6, 8, 7, 0];
console.log("Peak Index In Mountain Array: ", peakIndexInMountainArray(arr))