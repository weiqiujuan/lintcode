const kSumTarget =  (A, k, target)=> {
    let n = A.length;
    let f = new Array(n + 1);
    let i, j, p;
    for (i = 0; i < n + 1; i++) {
        f[i] = new Array(k + 1);
        for (j = 0; j < k + 1; j++) {
            f[i][j] = new Array(target + 1);
            for (p = 0; p < target + 1; p++) {
                f[i][j][p] = 0;
            }
        }
    }

    for (i = 0; i < n + 1; i++) {
        f[i][0][0] = 1;
    }

    for (i = 1; i <= n; i++) {
        for (j = 1; j <= k && j <= i; j++) {
            for (let t = 1; t <= target; t++) {
                f[i][j][t] = 0;
                if (t >= A[i - 1]) {
                    f[i][j][t] = f[i - 1][j - 1][t - A[i - 1]];
                }
                f[i][j][t] += f[i - 1][j][t];
            }
        }
    }
    return f[n][k][target];
};

const test = () => {
    let nums = [1, 2, 3, 4], k = 2, target = 5;
    console.log(kSumTarget(nums, k, target));
};
test();
