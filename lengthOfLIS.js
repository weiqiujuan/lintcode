/* 思路：动态规划
* 动态规划方程：dp[i] = Math.max(dp[j] + 1, dp[i])
* 技巧：初始化一个元素全部为1的数组。 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
    if (!nums.length) {
        return 0
    }
    // dp[i]表示i之前最长上升子序列长度
    let dp = new Array(nums.length).fill(1);
    let max = dp[0];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
                max = Math.max(max, dp[i])
            }
        }
    }
    return max
};
const nums = [10, 9, 2, 5, 3, 7, 101, 18]
const main = lengthOfLIS(nums);
console.log(main)