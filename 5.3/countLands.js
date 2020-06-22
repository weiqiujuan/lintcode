
function countLands(arr) {
    if (!arr || arr.length === 0) return 0;
    const len = arr.length;
    const lenSmall = arr[0].length;
    const row = Array(lenSmall).fill(false);//全部初始化为false.
    const visited = Array(len).fill(row);//访问过的数组

    let res = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < lenSmall; j++) {
            if (arr[i][j] && !visited[i][j]) {
                lands(arr, visited, i, j);
                res++;
            }
        }
    }
    return res;
}

function lands(arr, visited, i, j) {
    if (i < 0 || i > arr.length) return;
    if (j < 0 || j > arr.length) return;
    if (!arr[i][j] || visited[i][j]) return;

    visited[i][j] = true;
    lands(arr, visited, i - 1, j);
    lands(arr, visited, i, j - 1);
    lands(arr, visited, i + 1, j);
    lands(arr, visited, i, j + 1);
}

let test = [
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1]
];
console.log(countLands(test));