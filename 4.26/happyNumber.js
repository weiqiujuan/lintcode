const MAX_TIMES = 9999; //设置一个递归的最大次数

function isHappy(num, time) {
    let sum = 0, times = time || 0;
    const str = num.toString();
    for (let i = 0; i < str.length; i++) {
        let a = str.charAt(i);
        sum += a * a;
        times++;
    }
    if (sum === 1) return '快乐';
    if (times > MAX_TIMES) return '不快乐';
    return isHappy(sum, times);
}

console.log(isHappy(19));//快乐

console.log(isHappy(25));//不快乐

