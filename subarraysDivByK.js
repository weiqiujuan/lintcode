/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
    let obj = {0: 1}, pre = 0, count = 0;
    for (let item of A) {
        pre += item;
        let preMod = (pre % k + k) % k
        if (obj[preMod]) {
            count += obj[preMod];
            obj[preMod]++
        } else {
            obj[preMod] = 1
        }
    }
    return count;
};
const arr = [4, 5, 0, -2, -3, 1], k = 5
const main = subarraysDivByK(arr, k)
console.log(main)