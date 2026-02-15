// Leetcode 994. Rotting Oranges
// https://leetcode.com/problems/rotting-oranges/

function rottingOranges(arr) {
    //step:1 put all the rotten oranges in the queue
    const q = [];
    const row = arr.length;
    const col = arr[0].length;
    let maxMinute = 0;

    for (let i = 0; i < row; i++){
        for (let j = 0; j < col; j++){
            if (arr[i][j] === 2) {
                q.push([i, j, 0])
            }
        }
    }

    // step:2 mark each queue element's adjacent(right, left, top, bottom) as rotten and push them into the queue and repeat until queue becomes empty.
    while (q.length) {
        let [x, y, level] = q.shift();

        if (x > 0 && arr[x - 1][y]===1) {
            arr[x - 1][y] = 2;
            q.push([x - 1, y, level + 1]);
        }
        if (x < row - 1 && arr[x + 1][y]===1) {
            arr[x + 1][y] = 2;
            q.push([x + 1, y, level + 1]);
        }
        if (y > 0 && arr[x][y - 1]===1) {
            arr[x][y - 1] = 2;
            q.push([x, y - 1, level + 1]);
        }
        if (y < col - 1 && arr[x][y + 1] === 1) {
            arr[x][y + 1] = 2;
            q.push([x, y + 1, level + 1]);
        }

        maxMinute = Math.max(level, maxMinute);
    }

    // if queue is empty and still there is 1 then return -1 otherwise minute
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (arr[i][j] === 1) {
                return -1;
            }
        }
    }

    return maxMinute;
}

const matrix = [[2, 1, 1],[1, 1, 0],[0, 1, 1]]
console.log("Rotting Orange: ", rottingOranges(matrix))