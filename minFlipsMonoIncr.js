/**
 * @param {string} S
 * @return {number}
 */
const minFlipsMonoIncr = function (S) {
    let p = [0];
    for (let i = 0; i < S.length; i++) {
        p[i + 1] = p[i] + (S.charAt(i) === '1' ? 1 : 0)
    }
    let res = Infinity;
    for (let i = 0; i <= S.length; i++) {
        res = Math.min(res, p[i] + S.length - i - (p[S.length] - p[i]));
    }
    return res
};

const S = "00011000"
const main = minFlipsMonoIncr(S)
console.log(main)