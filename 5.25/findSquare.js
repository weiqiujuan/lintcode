const findSquare = function (arr) {
    if (arr.length <= 0 && arr[0].length <= 0) return 0;

    let row = arr.length;
    let col = arr[0].length;
    //定义一个二维数组，假设dpi表示以i,j为右下角的正方形的最大边长
    let arrDp = new Array();
    arrDp[0] = new Array();

    let max = 0;
    //对其行进行遍历
    for (let i = 0; i < row; i++) {
        if (arr[i][0] === 1) {
            arrDp[i][0] = 1;
            max = Math.max(max, arrDp[i][0]);
        }
    }
    //对其列进行遍历
    for (let j = 0; j < col; j++) {
        if (arr[0][j] === 1) {
            arrDp[0][j] = 1;
            max = Math.max(max, arrDp[0][j]);
        }
    }
    //对其行列左上，左边，上方的数进行遍历，迭加
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (arr[i][j] === 1) {
                if (arr[i - 1][j - 1] === 1 && arr[i - 1][j] === 1 && arr[i][j - 1] === 1) {
                    //找出三者最小的正方形
                    let len = Math.min(arrDp[i - 1][j], arrDp[i][j - 1]);
                    len = Math.min(len, arrDp[i - 1][j - 1]);
                    //将其进行迭加
                    arrDp[i][j] = 1 + len;
                    //计算边长
                    max = Math.max(max, arrDp[i][j] * arrDp[i][j]);
                } else {
                    arrDp[i][j] = 1;
                }
            }
        }
    }
    return max;
};


let test = [[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]];
console.log(findSquare(test));