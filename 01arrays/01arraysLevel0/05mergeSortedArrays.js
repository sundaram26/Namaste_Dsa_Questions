//given two non-decreasing array and we have to make one sorted array using them
// I/P:- nums1=[1, 2, 3, 0, 0, 0] and m=3; nums2=[2, 5, 6] and n=3;
// O/P:- nums1=[1, 2, 2, 5, 6];

function mergeSortedArrays(arr1, m, arr2, n) {
    let copyArr1 = arr1.slice(0, m);
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < m + n; i++){
        if (p2 >= n || (p1 < m && copyArr1[p1] <= arr2[p2])) {
            arr1[i] = copyArr1[p1++];
        } else {
            arr1[i] = arr2[p2++];
        }
    }
    return arr1;
}

function mergeSortedArrays2(arr1, m, arr2, n) {
    let p1 = m - 1;
    let p2 = n - 1; 


    for (let i = m + n - 1; i >= 0; i--){
        if (p2 < 0) {
            break;
        }
        // console.log("loop count: ", i)
        if (p1 >= 0 && arr1[p1] > arr2[p2]) {
            console.log("changes: ", arr1[i], " to ", arr1[p1]);
            arr1[i] = arr1[p1];
            p1--;
        } else {
            // console.log("changes: ", arr1[i], " to ", arr2[p2]);
            arr1[i] = arr2[p2];
            p2--;
        }
    }
    return arr1;
}

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
// console.log(mergeSortedArrays(nums1, 3, nums2, 3))
console.log(mergeSortedArrays2(nums1, 3, nums2, 3))