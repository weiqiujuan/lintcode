const threeSum = (nums) => {
    if (nums === null || nums.length < 3) {
        return [];
    }

    let result = [];
    let len = nums.length;
    nums.sort((num1, num2) => {
        return num1 > num2 ? 1 : -1;
    });

    for (let i = 0; i < len; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let start = i + 1, end = len - 1;
            while (start < end) {
                let sum = nums[i] + nums[start] + nums[end];
                if (sum === 0) {
                    result.push([nums[i], nums[start], nums[end]]);
                    start++;
                    end--;
                    while (start < end && nums[start] === nums[start - 1]) {
                        start++;
                    }
                    while (start < end && nums[end] === nums[end + 1]) {
                        end--;
                    }
                } else if (sum > 0) {
                    end--;
                } else {
                    start++;
                }
            }
        }
    }
    return result;
};

const main = () => {
    let nums = [-1, 0, 2, -1, -4];
    console.log(threeSum(nums));
};
main();