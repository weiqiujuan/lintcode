/*输入一个整数数组，实现一个函数来调整该数组中数字的顺序。
使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分*/

/**
 * @param {number[]} array
 * @return {void}
 */
const reOrderArray = function (array) {
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            rightArr.push(array[i])
        } else {
            leftArr.push(array[i])
        }
    }
    return leftArr.concat(rightArr);
};

const arr = [2, 9, 9, 5, 3, 2, 9, 6, 0, 4];
const main = reOrderArray(arr);
console.log(main)