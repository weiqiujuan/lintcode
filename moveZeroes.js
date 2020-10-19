/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
		let j = 0;
		for (let i = 0; i < nums.length; i++) {
				if (nums[i] !== 0) {
						let tmp = nums[i];
						nums[i] = nums[j]
						nums[j] = tmp;
						j++;
				}
				// if (nums[i] !== 0) {
				// 		nums[j] = nums[i]
				// 		if (i !== j) {
				// 				nums[i] = 0
				// 		}
				// 		j++
				// }
		}
		return nums
};

const main = moveZeroes([0, 1, 0, 3, 12])
console.log(main)
