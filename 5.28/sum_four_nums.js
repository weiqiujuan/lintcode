const fourSum = (nums, target) => {

    if (nums === null || nums.length < 4) {
        return [];
    }
    let result = [];
    let len = nums.length;
    nums.sort((num1, num2) => {
        return num1 > num2 ? 1 : -1
    });

    for (let i = 0; i < len - 3; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            for (let j = 0; j < len - 2; j++) {
                if (j = i + 1 || nums[j] !== nums[j - 1]) {
                    let start = j + 1, end = len - 1;

                    while (start < end) {
                        let sum = nums[i] + nums[j] + nums[start] + nums[end];

                        if (sum === target) {
                            result.push([nums[i], nums[j], nums[start], nums[end]])
                            start++;
                            end--;

                            while (start < end && nums[start] === nums[start - 1]) {
                                start++;
                            }
                            while (start < end && nums[end] === nums[end + 1]) {
                                end--;
                            }
                        }
                        else if (sum > target) {
                            end--;
                        } else {
                            start++;
                        }

                    }

                }
            }
        }
    }
    return result;
};

const main = () => {
    let nums = [1, 0, -1, 0, -2, 2];
    let target = 0;
    console.log(fourSum(nums, target));
};