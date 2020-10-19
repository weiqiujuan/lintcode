/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let head = 0, tail = nums.length - 1,res=[];
    while (head < tail) {
        if (nums[head] + nums[tail] < target) {
            head++
        } else if (nums[head] + nums[tail] > target) {
            tail--
        } else {
            res.push(nums[head],nums[tail])
            return res
        }
    }
    return false

};
const arr = [10, 26, 30, 31, 47, 60], target = 40
const main = twoSum(arr, target)
console.log(main)