function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    if (!arr || target < arr[start] || target[end]) return -1;
    while (start <= end) {
        let mid = Math.ceil((end - start) / 2);
        if (arr[mid] === target) return mid;
        if (target < arr[mid]) {
            end = mid;
        }
        if (target > arr[mid]) {
            start = mid;
        }
        if (arr[start] === target) return start;
        if (arr[end] === target) return end;
        if (start === end - 1) return -1;
    }

}

let test = [1, 2, 2, 4, 5, 5];
console.log(binarySearch(test, 4));