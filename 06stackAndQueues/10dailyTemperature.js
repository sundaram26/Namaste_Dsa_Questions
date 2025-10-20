// Leetcode 739. Daily Temperature
// https://leetcode.com/problems/daily-temperatures/

function dailyTemperature(arr) {
    let st = [];  //stack
    let ans = [];  //arr
    for (let i = arr.length - 1; i >= 0; i--){
        while (st.length) {
            if (arr[i] >= arr[st[st.length - 1]]) {
                st.pop();
            } else {
                break;
            }
        }
        if (st.length > 0) {
            ans.push(Number(st[st.length - 1]) - Number(i));
        } else {
            ans.push(0)
        }
        st.push(i);
    }

    return ans.reverse();
}

console.log("The next warmer days: ", dailyTemperature([73, 74, 75, 71, 69, 72, 76, 73]))