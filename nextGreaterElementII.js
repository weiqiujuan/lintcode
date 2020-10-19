// 503. 下一个更大元素 II
/**
 * @param {number[]} nums1
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    var res = [];
    var _nums = nums.concat(nums);
    for (var i = 0; i < nums.length; i++) {
        var flag = true;
        for (var j = i + 1; j < _nums.length; j++) {
            if (nums[i] < _nums[j]) {
                res.push(_nums[j]);
                flag = false;
                break;
            }
        }
        if (flag) res.push(-1);
    }
    return res;
};

let nums1 = [1, 2, 1];
let main = nextGreaterElements(nums1);
console.log(main)