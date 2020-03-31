/*输入一个 非空 整型数组，数组里的数可能为正，也可能为负。
数组中一个或连续的多个整数组成一个子数组。
求所有子数组的和的最大值。
要求时间复杂度为O(n)。*/

/*动态规划方程：dp[n] = Math.max(nums[n]+dp[n-1],nums[n])*/

/*动态规划转移方程：
dp[i-1]>0, dp[n] = dp[n-1] + nums[n];
dp[i-1]<=0,dp[n] = nums[n];
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArrayII = function (nums) {
    let len = nums.length;
    let max = -Number.MAX_VALUE;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum = 0;
        for (let j = i; j < len; j++) {
            max = Math.max(sum += nums[j], max)
        }
    }
    return max
};

// 动态规划解决
const maxSubArray = function (nums) {
    const len = nums.length;
    let max = nums[0];
    for (let i = 1; i < len; i++) {
        nums[i] = nums[i - 1] > 0 ? nums[i - 1] + nums[i] : nums[i]
        max = Math.max(nums[i], max)
    }
    return max
};

const array = [1, -2, 3, 10, -4, 7, 2, -5]
const main = maxSubArray(array)
console.log(main)