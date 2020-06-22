const minPathSum = (grid) => {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return null;
    }

    let m = grid.length, n = grid[0].length;
    let pathSums = [];
    for (let i = 0; i < m; i++) {
        pathSums.push([]);
        for (let j = 0; j < n; j++) {
            pathSums[i].push(0);
        }
    }

    //initial pathSums
    pathSums[0][0] = grid[0][0];
    for (let i = 1; i < m; i++) { //第一列
        pathSums[i][0] = pathSums[i - 1][0] + grid[i][0];
    }
    for (let j = 1; j < n; j++) { //第一行
        pathSums[0][j] = pathSums[0][j - 1] + grid[0][j];
    }

    //DP
    for (let x = 1; x < m; x++) {
        for (let y = 1; y < n; y++) {
            pathSums[x][y] = Math.min(pathSums[x][y - 1],pathSums[x - 1][y]+grid[x][y]);
        }
    }

    return pathSums[m-1][n-1];
};


const main = () => {
    let grid = [[2, 3, 1], [3, 5, 1], [4, 2, 3]];
    console.log(minPathSum(grid));
};

main();