

function merge(left, right) {
    const res = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i++]);
        } else {
            res.push(right[j++]);
        }
    }

    // while (i < left.length) {
    //     res.push(left[i++]);
    // }
    // while (j < right.length) {
    //     res.push(right[j++]);
    // }
    
    // return res;

    return [...res, ...left.slice(i), ...right.slice(j)];
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

const arr = [4, 5, 12, 22, 1, 18, -10, -3, 2, 1]
console.log(mergeSort(arr))