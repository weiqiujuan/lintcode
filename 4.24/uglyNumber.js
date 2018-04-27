function isUglyNum(num) {
    if(num<0)return false;
    if(num===1) return true;
    const primeNumArr=[2,3,5];
    while (num>1){
        let divider=-1;
        for(let i=0;i<primeNumArr.length;i++){
            if(num%primeNumArr[i]===0){
                divider=primeNumArr[i];
                break;
            }
        }
        if(divider===-1) return false;
        else num/=divider;
    }
    return true;
}

console.log(isUglyNum(6));
console.log(isUglyNum(25));