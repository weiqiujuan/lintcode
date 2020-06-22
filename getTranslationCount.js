/*给定一个数字，我们按照如下规则把它翻译为字符串：

0翻译成”a”，1翻译成”b”，……，11翻译成”l”，……，25翻译成”z”。

一个数字可能有多个翻译。例如12258有5种不同的翻译，它们分别是”bccfi”、”bwfi”、”bczi”、”mcfi”和”mzi”。

请编程实现一个函数用来计算一个数字有多少种不同的翻译方法。*/


/*思路：
* 1.每单个字符一定能转换成字母
* 2.如果i字符与i-1个字符能组成字符，那么i处组成就有两种情况，即i-1与i-2两个位置的方法数量之和
* 3.如果i字符与i-1个字符不能组成字符，那么i处的组成方法只有一种，即i-1处的数量
* 4.如果i-2处的字符为0，那么i-1与i处的字符不能算作一个在组成方法里，应该按照不能组成来处理而且如果i<= 1，不存在i - 2，所以+1即可 */
/* 动态方程：dp[i] = dp[i - 1] + if('' + num[i - 1] + num[i] < 26){i > 1 ? dp[i - 2] : 1};*/
/**
 * @param {string} s
 * @return {number}
 */
const getTranslationCount = function (s) {
    s += ''
    if (!s.length) return 0
    // 每单个字符一定能转换成字母
    let count = s.length;
    let dp = [1]
    for (let i = 1; i < s.length; i++) {
        if ('' + s[i - 1] + s[i] < 26 && s[i - 1] !== '0') {
            dp[i] = i > 1 ? dp[i - 1] + dp[i - 2] : dp[i - 1] + 1
        } else {
            dp[i] = dp[i - 1]
        }
    }
    return dp[count - 1]
};
const s = '12258';
const main = getTranslationCount(s);
console.log(main)