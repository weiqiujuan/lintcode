/**
 * @param {number} length
 * @return {number}
 */

/*给你一根长度为 n 绳子，请把绳子剪成 m 段（m、n 都是整数，2≤n≤58 并且 m≥2）。
每段的绳子的长度记为k[0]、k[1]、……、k[m]。k[0]k[1] … k[m] 可能的最大乘积是多少？*/
//动态规划
//动态规划方程：dp[i] = max(dp[i], j*(i-j), j*dp[i-j])
const maxProductAfterCutting = function (n) {
    const dp = new Array(n + 1).fill(1)
    for (let i = 3; i <= n; ++i) {
        for (let j = 1; j < i; ++j) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
        }
    }
    return dp[n]
};
//贪心算法: 敢想敢猜就ok.
// const maxProductAfterCuttingII = function (n) {
//     if (n === 2) return 1
//     if (n === 3) return 2
//     const a = Math.floor(n / 3)
//     const b = n % 3
//
//     if(b===0) return Math.pow(3,a)
//     if(b===1) return Math.pow(3, a-1)*4
//     return Math.pow(3,a)*2
// };

const length = 8
const main = maxProductAfterCutting(length)
console.log(main)