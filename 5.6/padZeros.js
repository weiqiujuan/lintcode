function padZeros(arr){
    let len=arr.length;
    for(let i=0;i<len;i++){
        if(arr[i]===0){
            arr.splice(i,1);
            arr.push(0);
        }
    }
    return arr;
}

let testArr=[1,0,4,0,2];
console.log(padZeros(testArr));