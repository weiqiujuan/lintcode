const arrayIntersection = (...args) => {
    // arr1 = sort(arr1)
    // arr2 = sort(arr2)
    // let i = 0, j = 0, res = [];
    // while (i < arr1.length && j < arr2.length) {
    //     if (arr1[i] < arr2[j]) {
    //         i++
    //     } else if (arr1[i] > arr2[j]) {
    //         j++
    //     } else {
    //         res.push(arr1[i])
    //         i++;
    //         j++
    //     }
    // }
    // return res

    let newArr = []
    for (let i = 0; i < args.length; i++) {
        newArr.push(...args[i])
    }
    let res = [];
    let obj = {};
    for (let i = 0; i < newArr.length; i++) {
        if(!obj[newArr[i]]){
            obj[newArr[i]] =0
        }
        obj[newArr[i]]++
    }
    for (let item in obj) {
        if (obj[item] >= args.length) {
            res.push(parseInt(item))
        }
    }
    return res
}
const sort = (arr) => {
    return arr.sort((a, b) => {
        return a - b
    })
}
const arr1 = [2, 5, 4, 6, 7, 8]
const arr2 = [2, 4, 6, 7, 10, 12]
const arr3 = [3, 5, 6, 7, 10]
console.log(arrayIntersection(arr1, arr2, arr3))