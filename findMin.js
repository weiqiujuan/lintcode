/*把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

输入一个升序的数组的一个旋转，输出旋转数组的最小元素。

例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。

数组可能包含重复项。

注意：数组内所含元素非负，若数组大小为0，请返回-1。

样例
输入：nums=[2,2,2,0,1]

输出：0*/

/*思路：
* 采用二分法思想：
* 三种可能： 1.中间的比最后一个数大，first = mid + 1  说明小数在后半部分
* 2.中间的比最后一个数小，high = mid 说明小数在前半部分
* 3.中间的数和最后一个数相同，height-1,去重*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
    if (!nums || !nums.length) {
        return -1
    }
    let first = 0;
    let high = nums.length - 1;
    if(nums[first]< nums[high]){
        return nums[first]
    }
    while (first<high){
        let mid = first + parseInt((high-first)/2)
        if(nums[mid] < nums[high]){
            high = mid
        }else if (nums[mid] > nums[high]){
            first = mid+1
        }else {
            high = high-1
        }
    }
    return nums[first]
};
const main = findMin([10, 10, 1, 2, 3, 4, 4, 5, 7, 8])
console.log(main)