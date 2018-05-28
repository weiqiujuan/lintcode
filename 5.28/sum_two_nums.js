const twoSum = (nums, target) => {
    if (nums === null && nums.length === 0) {
        return [];
    }

    let map = new Map();
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i])+1, i+1];

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