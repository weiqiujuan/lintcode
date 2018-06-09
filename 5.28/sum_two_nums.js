const twoSum = (nums, target) => {
    if (nums === null && nums.length === 0) {
        return [];
    }
    let map = new Map();
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i])+1, i+1];//get获取的下标都是以0开始，我们需要的是从1开始。
        }
        map.set(nums[i], i);
    }
};

const main = () => {
    let nums = [2, 7, 11, 15];
    let target = 9;
    console.log(twoSum(nums, target));
};

main();