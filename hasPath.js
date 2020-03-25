/**
 * @param {[[string, string, string, string], [string, string, string, string], [string, string, string, string]]} matrix
 * @param {string} str
 * @return {boolean}
 */
const hasPath = function (matrix, str) {
    if(!matrix.length){
        return false
    }
    const col = matrix[0].length;
    const row = matrix.length;

    for (let i = 0;i< row;i++){
        for(let j =0 ;j< col;j++){
            if(hasSuccess(i,j,0)){
                return true
            }
        }
    }
    function hasSuccess(i,j,k) {
        if (i < 0 || j < 0 || i >= row || j >= col || str[k] !== matrix[i][j]) {
            return false
        }
        if(k === str.length-1){
            return true
        }
        const tmp = matrix[i][j]
        matrix[i][j] = '-';
        const res = hasSuccess(i+1,j,k+1)||hasSuccess(i-1,j,k+1)||hasSuccess(i,j+1,k+1)||hasSuccess(i,j-1,k+1)
        matrix[i][j] = tmp;
        return res
    }
    return false
};

const matrix = [
        ["A","B","C","E"],
        ["S","F","C","S"],
        ["A","D","E","E"]
]
const str = "BCCEE"
const main = hasPath(matrix, str);
console.log(main)
