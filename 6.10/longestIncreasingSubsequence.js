const longestIncreasingSubsequence = (nums) => {
    if (nums === null || nums.length === 0) {
        return 0;
    }

    let len = nums.length;
    //初始化一个元素值全部为1的数组。
    let arr = new Array(len).fill(1);

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            //比较原数组的数，如果是升序的，我们就对新数组元素迭加并且赋值给arr[i]
            if (nums[j] < nums[i]) {
                arr[i] = Math.max(arr[i], arr[j] + 1)
            }
        }
    }

    let longest = -Infinity;
    for (let i = 0; i < len; i++) {
        console.log(arr[i]);
        longest = Math.max(longest, arr[i])
    }
    return longest;
};

let test = [2, 1, 2, 5, 6, 8, 3, 1];
console.log(longestIncreasingSubsequence(test));