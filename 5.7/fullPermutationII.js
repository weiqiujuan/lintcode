function permuteUnique(nums) {
    if (nums === null) return [];
    if (nums.length === 0) return [[]];
    let result = [];
    let subRes = [];
    let visited = [];
    nums.sort((a, b) => {
        return a - b ? 1 : -1
    });
    for (let i = 0; i < nums.length; i++) {
        visited[i] = false;
    }
    judge(nums, subRes, visited, result);
    return result;
}

function judge(nums, subRes, visited, result) {
    if (subRes.length === nums.length) {
        result.push(subRes.concat([]))
    }
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (!visited[i]) {
            if (i === 0 || nums[i] !== nums[i - 1] || visited[i - 1]) {
                subRes.push(nums[i]);
                visited[i] = true;
                judge(nums, subRes, visited, result);
                visited[i] = false;
                subRes.pop();
            }
        }
    }
}

let test = [5, 4, 2, 2, 1];
console.log(permuteUnique(test));