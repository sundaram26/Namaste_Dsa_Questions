// Leetcode 658. Find K Closest Elements
// https://leetcode.com/problems/find-k-closest-elements/

function findKClosest(arr, k, x) {
    let s = 0;
    let e = arr.length - k;

    while (s < e) {
        let mid = s + (e - s) / 2;
        if (x - arr[mid] > arr[mid + k] - x) {
            s = mid + 1;
        } else {
            e = mid;
        }
    }

    return arr.slice(s, s + k);
}

const arr = [1, 2, 2, 4, 5, 6, 7]
console.log("Find K Closest Element: ", findKClosest(arr, 3, 2))