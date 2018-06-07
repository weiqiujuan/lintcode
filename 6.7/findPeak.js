const findPeak = (nums) => {
    if (nums === null && nums.length === 0) {
        return -1
    }
    let start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] < nums[mid + 1]) {
            start = mid;
        } else if (nums[mid] > nums[mid + 1]) {
            end = mid;
        }
    }
    if (nums[start] > start[end]) {
        return start;
    }
    return end;
};

let test = findPeak([1, 2, 5, 6, 8, 2, 3]);
console.log(test);