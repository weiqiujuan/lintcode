const unquiePath = (grid) => {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }

    let m = grid.length, n = grid[0].length;
    let pathSums = [];

    for (let x = 0; x < m; x++) {
        pathSums.push([]);
        for (let y = 0; y < n; y++) {
            pathSums[x].push(0);
        }
    }

    for (let x = 0; x < n; x++) {
        if (grid[x][0] === 0) {
            pathSums[x][0] = 1;
        } else {
            break;
        }
    }

    for (let y = 0; y < n; y++) {
        if (grid[0][y] === 0) {
            pathSums[0][y] = 1;
        } else {
            break;
        }
    }

    //DP
    for (let x = 1; x < m; x++) {
        for (let y = 1; y < n; y++) {
            if (grid[x][y] === 0) {
                pathSums[x][y] = pathSums[x][y - 1] + pathSums[x - 1][y];
            } else {
                pathSums[x][y] = 0;
            }
        }
    }

    return pathSums[m - 1][n - 1];
};

const main = () => {
    let grid = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ];
    console.log(unquiePath(grid));
};
main();