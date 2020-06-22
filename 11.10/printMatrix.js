function printMatrix(matrix) {
    if (matrix === null || matrix.length === 0) {
        return;
    }
    let rows = matrix.length
    let cols = matrix[0].length
    let start = 0
    let result = [];

    while (cols > start * 2 && rows > start * 2) {
        let endX = cols - 1 - start
        let endY = rows - 1 - start
        //左到右
        for (let i = start; i <= endX; i++) {
            result.push(matrix[start][i])
        }

        //上到下
        if (start < endY) {
            for (let i = start + 1; i < endY; i++) {
                result.push(matrix[i][endX])
            }
        }
        //右到左
        if (start < endX && start < endY) {
            for (let i = endX - 1; i >= start; i--) {
                result.push(matrix[endY][i])
            }
        }
        //下到上
        if (start < endX && start < endY - 1) {
            for (var i = endY - 1; i >= start + 1; i--) {
                result.push(matrix[i][start]);
            }
        }

        start++
    }
    return result
}

let main = printMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
console.log(main)