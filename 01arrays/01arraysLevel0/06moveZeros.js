//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.(in-place)
//e.g:- I/P: nums = [0,1,0,3,12]; O/P: [1,3,12,0,0]

function moveZeros(arr) {
    let n = arr.length;
    let p = 0;
    for (let i = 0; i < n; i++){
        if (arr[i] === 0) {
            continue;
        }
        if (arr[p] === 0 && arr[i] !== 0) {
            let temp = arr[p];
            arr[p] = arr[i];
            arr[i] = temp;
            p++;
        }
    }
    return arr;
}

const arr = [0, 1, 0, 3, 12];
console.log(moveZeros(arr));