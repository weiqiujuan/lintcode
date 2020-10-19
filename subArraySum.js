/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let obj = {0: 1}, num = 0, count = 0;
    for (let item of nums) {
        num += item;
        if (obj[num - k]) count += obj[num - k]
        if (obj[num]) obj[num] += 1
        else obj[num] = 1
    }
    return count;
};

const arr = [1, 1, 1, 2], k = 2
const main = subarraySum(arr, k)
console.log(main)