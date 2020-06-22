/*
0<=m<=50
0<=n<=50
0<=k<=10
*/
/*
* 思路：使用递归的思想
* 1.首先创建一个二维数组
* 2.确定递归结束条件：* 行列越界
*                    * 行列值超出范围
*                    * 是否已走过
*                    * 当前字符是否满足递归终止条件*/
/**
 * @param {number} threshold
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
const movingCount = function (threshold, rows, cols) {
    const flag = createArray(rows, cols)
    let count = 0;
    if (rows > 0 && cols > 0) {
        count = movingCountCore(0, 0, threshold, rows, cols, flag)
    }
    return count
};
const movingCountCore = function (i, j, threshold, rows, cols, flag) {
    if (i < 0 || j < 0 || rows <= i || cols <= j || flag[i][j] || condition(i, j, threshold)) {
        return 0
    }
    flag[i][j] = true
    return 1 + movingCountCore(i - 1, j, threshold, rows, cols, flag) +
        movingCountCore(i + 1, j, threshold, rows, cols, flag) +
        movingCountCore(i, j - 1, threshold, rows, cols, flag) +
        movingCountCore(i, j + 1, threshold, rows, cols, flag);
}
//判断当前字符是否满足
const condition = function (i, j, target) {
    let tmp = i + '' + j;
    let sum = 0;
    for (let i = 0; i < tmp.length; i++) {
        sum += tmp.charAt(i) / 1
    }
    return sum > target
}
//创建一个二维数组
const createArray = function (rows, cols) {
    const result = new Array(rows) || [];
    for (let i = 0; i < rows; i++) {
        const arr = new Array(cols)
        for (let j = 0; j < cols; j++) {
            arr[j] = false
        }
        result[i] = arr;
    }
    return result
}


let k = 7, m = 4, n = 5;
const main = movingCount(k, m, n)
console.log(main);