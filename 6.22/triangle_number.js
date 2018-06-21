const smallTopTriangle = (arr) => {
    if (arr===null||arr.length===0||arr[0].length===0){
        return-1;
    }
    let n = arr.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        arr[i].sort((a, b) => {
            return a - b
        });
        sum += arr[i][0];
    }
    return sum;
};

 let test=[
     [2],
     [3,4],
     [6,5,7],
     [4,1,8,3]
 ];
 console.log(smallTopTriangle(test));
