// 496. 下一个更大元素 I
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
    let obj = {};
    for (let i = 0; i < nums2.length; i++) {
        let j = i + 1
        while (nums2[i] > nums2[j] && j < nums2.length) {
            j++;
        }
        if (!nums2[j]) {
            obj[nums2[i]] = -1
        } else {
            obj[nums2[i]] = nums2[j]
        }
    }
    let res = []
    nums1.map(item => {
        if (obj[item]) {
            res.push(parseInt(obj[item]))
        } else {
            res.push(-1)
        }
    })
    return res
};
let nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2];
let main = nextGreaterElement(nums1, nums2);
console.log(main)