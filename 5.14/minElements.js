function minElements(arr) {
    let max = 0;
    let newArr = arr.sort((a, b) => {
        return b - a;
    });
    let sum = arr.reduce((total, num) => {
        return num + total;
    });
    let half = sum / 2;
    for (let i = 0, len = arr.length; i < len; i++) {
        max += newArr[i];
        if (max > half) return i+1;
    }
    return 0;
}

let test = [2, 1, 2];
console.log(minElements(test));