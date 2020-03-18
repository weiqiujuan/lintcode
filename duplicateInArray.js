/*给定一个长度为 n 的整数数组 nums，数组中所有的数字都在 0∼n−1 的范围内。
数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
请找出数组中任意一个重复的数字。
注意：如果某些数字不在 0∼n−1 的范围内，或数组中不包含重复数字，则返回 -1；*/

/*给定 nums = [2, 3, 5, 4, 3, 2, 6, 7]。
返回 2 或 3。*/


/*思路： 给定一个空对象，给定一个标记key:
遍历数组，将数组元素当作对象的key:value去存储，
每次判断，如果新的元素，存储，如果旧的元素，将元素付给标记key，
最后判断是否存在标记key，输出标记值*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const duplicateInArray = function(nums) {
    let test = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0 && nums[i] <= nums.length - 1) {
            if (test[nums[i]] === undefined) {
                test[nums[i]] = nums[i]
            } else {
                test.num = nums[i]
                return test.num
            }
        } else {
            return -1
        }
    }
    if (test.num === undefined) {
        return -1
    } else {
        return test.num
    }
}


const  main = duplicateInArray([2, 3, 5, 4, 3, 2, 6, 7])
console.log(main)