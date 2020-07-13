function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        while (arr[right] >= arr[0] && left < right) {
            right--;
        }
        while (arr[left] <= arr[0] && left < right) {
            left++
        }

        if (left === right) {
            let mid = arr[right]
            arr[right] = arr[0]
            arr[0] = mid
        }
        let tmp = arr[right]
        arr[right] = arr[left]
        arr[left] = tmp
    }
    return quickSort(arr.slice(0, left)).concat(arr.slice(left, right + 1)).concat(quickSort(arr.slice(right + 1)));
}
var arr = [5, 7, 2, 9, 3, 8, 4, 7, 1];
console.log(quickSort(arr));