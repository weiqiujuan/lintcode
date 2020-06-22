/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j=0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i] !== val){
            nums[j++] =nums[i]
        }
    }
    return j
};

const main= removeElement([0,1,0,3,12],0)
console.log(main)
