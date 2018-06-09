let combinationSum = function (candidates, target) {
    if (candidates === null || candidates.length === 0) {
        return [];
    }
    //先排序
    candidates.sort((num1, num2) => {
        return num1 - num2;
    });

    let result = [];
    let combination = [];

    //递归
    dfs(candidates, 0, target, combination, result);

    return result;
};

const dfs = (candidates, startIndex, target, combination, result) => {

    //找到最后的target组合数组
    if (target === 0) {
        result.push(combination.concat([]));
    }

    let size = candidates.length;

    for (let i = startIndex; i < size; i++) {
        if (candidates[i] > target) {
            break;
        }

        //改变数组的索引，进行迭代
        if (i === 0 || candidates[i] !== candidates[i - 1] || i === startIndex) {
            combination.push(candidates[i]);
            dfs(candidates, i + 1, target - candidates[i], combination, result);
            combination.pop();
        }
    }
};

let test = [2, 3, 6, 7];
console.log(combinationSum([2, 3, 6, 7], 9));