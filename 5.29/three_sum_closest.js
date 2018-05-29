const threeSumClosest = (nums, target) => {
    if (nums === null || nums.length < 3) {
        return null;
    }

    nums.sort((num1, num2) => {
        return num1 > num2 ? 1 : -1;
    });

    let sum;
    let diff = Infinity;
    let closestSum;

    let len = nums.length;
    for (let i = 0; i < len - 2; i++) {
        let start = i + 1;
        let end = len - 1;

        while (start < end) {
            sum = nums[i] + nums[start] + nums[end];
            if (Math.abs(target - sum) < diff) {
                closestSum = sum;
                diff = Math.abs(target - sum);
            }
            if (sum > target) {
                end--;
            } else if (sum < target) {
                start++;
            } else {
                return sum;
            }
        }
    }
    return closestSum;

};

const main = () => {
    let nums = [-1, 2, 1, -4];
    let target = 1;
    console.log(threeSumClosest(nums, target));
};
main();