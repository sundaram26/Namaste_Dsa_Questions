// Leetcode 34. Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

function firstAndLastElem(arr, target) {
    let firstElem = -1;
    let lastElem = -1;
    
    let s = 0;
    let e = arr.length - 1;

    while (s <= e) {
        let mid = s + Math.floor((e - s) / 2);

        if (arr[mid] === target) {
            firstElem = mid;
            e = mid - 1;
        } else if (arr[mid] > target) {
            e = mid - 1;
        } else {
            s = mid + 1;
        }
    }

    s = 0;
    e = arr.length - 1;

    while (s <= e) {
        let mid = s + Math.floor((e - s) / 2);

        if (arr[mid] === target) {
            lastElem = mid;
            s = mid + 1;
        } else if (arr[mid] > target) {
            e = mid - 1;
        } else {
            s = mid + 1;
        }
    }

    return [firstElem, lastElem]
}

const arr = [1, 2, 3, 3, 3, 3, 4, 5];
console.log("Fist And Last Element Array: ", firstAndLastElem(arr, 3))