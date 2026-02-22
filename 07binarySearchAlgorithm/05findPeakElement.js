// 162. Find Peak Element
// https://leetcode.com/problems/find-peak-element/


function findPeakElement(arr) {
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

    return s;
}

const arr = [1, 2, 1, 3, 5, 6, 4]
console.log("Peak element: ", findPeakElement(arr))