// Leetcode 540. Single Element in a Sorted Array
// https://leetcode.com/problems/single-element-in-a-sorted-array/


function singleElement(nums) {
    let s = 0;
    let e = nums.length - 1;

    while (s < e) {
        let m = s + Math.floor((e - s) / 2);
        // pair on the left
        if (arr[m] == arr[m - 1]) {
          leftCount = m - 1 - s;
          if (leftCount % 2 === 1) {
            e = m - 2;
          } else {
            s = m + 1;
          }
        } else if (arr[m] == arr[m + 1]) { //pair on the right
          leftCount = m - s;
          if (leftCount % 2 === 1) {
            e = m - 1;
          } else {
            s = m + 2;
          }
        } else {
            return arr[m];
        }
    }

    return arr[s];
}

const arr = [1, 1, 2, 2, 3, 3, 4, 4, 6, 6, 7]
console.log("Single Element In Sorted Array: ", singleElement(arr));