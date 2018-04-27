const smallestDifference = function (A, B) {

    let small=5;//初始化最小数;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {

            let diff = Math.abs(A[i] - B[j]);
            if (diff < small) {
                 small = diff;
            }
        }
    }
    return small;

};
let A = [3, 4, 6, 7];
let B = [2, 5, 8, 9];
console.log(smallestDifference(A, B));