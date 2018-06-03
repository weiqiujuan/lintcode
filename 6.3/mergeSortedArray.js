//m,n分别表示每个数组中的非空元素个数。
const mergeSortedArray = (arr1, m, arr2, n) => {
    let i = m - 1;
    let j = n - 1;
    let index = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (arr1[i] > arr2[j]) {
            arr1[index--] = arr1[i--];

        } else {
            arr1[index--] = arr2[j--];
        }
    }
    while (i >= 0) {
        arr1[index--] = arr1[i--];
    }
    while (j >= 0) {
        arr1[index--] = arr2[j--];
    }
};

const main = () => {
    let arr1 = [1, 2, 4, 5, 'empty', 'empty'],
        arr2 = [3, 6],
        m = 4,
        n = 2;

    mergeSortedArray(arr1, m, arr2, n);
    console.log(arr1);
};

main();