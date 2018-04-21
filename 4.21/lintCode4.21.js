function reserve(str,target){
    if(target===0){
        return;
    }
    if(str.length===0){
        return;
    }
    let strAt=str.slice(target,target+1);
    let newStr=str.split(strAt);
    let result=newStr[1].concat(newStr[0]);
}
console.log(reserve("absdcfgd",3));