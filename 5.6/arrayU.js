function arrayU(arr1, arr2) {
    let result = [];
    const [len1, len2] = [arr1.length, arr2.length];
    arr1.sort();
    arr2.sort();
    const arr = arr1.concat(arr2);

    let i = 0, j = len1;
    while (i < len1 && j < len1 + len2) {
        if (arr[i] < arr[j]) {
            i++;
        } else if (arr[i] > arr[j]) {
            j++;
        } else {
            if (!result.includes(arr[i])) {
                result.push(arr[i])
            }
            i++;
            j++;
        }
    }
    return result;
}

let testArr1 = [1, 2, 2, 1];
let testArr2 = [2, 2];
console.log(arrayU(testArr1, testArr2));//[2]