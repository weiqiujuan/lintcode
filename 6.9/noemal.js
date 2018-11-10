const normal = (nums) => {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    let count = 0;
    let counts = [];
    len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = 1; j < len; j++) {
            if (nums[i] < nums[j]) {
                count++;

            } else {
                counts.push(count);
                count=0;
            }
        }
    }
    return Math.max(...counts);
};

let test = [2, 1, 2, 5, 6, 8, 3, 1];
console.log(normal(test));