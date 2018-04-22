function reserve(str,target){
    let len=str.length;
    if(target===0){
        return;
    }
    if(len===0){
        return;
    }
    let strAt=str.slice(len-target,len);
    let newStr=str.split(strAt);
    let result=strAt.concat(newStr[0]);
    return result;
}
console.log(reserve("absdcfgd",3));