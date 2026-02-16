// 69. Sqrt(x)
// https://leetcode.com/problems/sqrtx/

function sqrt(x) {
    if (x < 2) return x;

    let start = 0;
    let end = x / 2;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (mid ** 2 === x) {
            return mid;
        }

        if (mid ** 2 < x) {
            start = mid + 1;
        }

        if (mid ** 2 > x) {
            end = mid - 1;
        }
    }

    return end;
}

console.log("Square root: ", sqrt(101));