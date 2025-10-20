// Leetcode 496. Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/

function nextGreaterElementI(arr1, arr2) {
    let ngeMap = {};
    let st = [];

    const n = arr2.length - 1;
    st.push(arr2[n]);
    ngeMap[arr2[n]] = -1;

    for (let i=n-1; i >= 0; i--){
        if (arr2[i] < st[st.length - 1]) {
            ngeMap[arr2[i]] = st[st.length - 1];
        } else {
            while (st.length) {
                if (arr2[i] > st[st.length - 1]) {
                    st.pop();
                } else {
                    ngeMap[arr2[i]] = st[st.length - 1];
                }
            }
            if (st.length === 0) {
                ngeMap[arr2[i]] = -1;
            }
        }
        st.push(arr2[i]);
    }

    let ans = [];
    for (let i = 0; i < arr1.length; i++){
        ans.push(ngeMap[arr1[i]]);
    }

    return ans;
}

console.log("The nge array: ", nextGreaterElementI([2,4], [1, 2, 3, 4]))