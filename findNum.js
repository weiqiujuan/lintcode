const findNum = (num) => {
    num = num + ''
    let arr = num.split('');
    let i = arr.length - 1;
    while (arr[i] < arr[i - 1]) {
        i = i - 1
    }
    let tmp1 = arr[i];
    let j = i;
    while (arr[j] < arr[j + 1]) {
        j = j + 1
    }
    arr[i] = arr[j]
    arr[j] = tmp1
    let res = arr.splice(i).reverse()
    return parseInt(arr.concat(res).join(''))
}
const main = findNum(21)
console.log(main)