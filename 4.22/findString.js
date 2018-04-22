function findStr(source,target){
    if(source===null||target===null){
        return -1;
    }
    for(let i=0;i<source.length-target.length+1;i++){
           for(var j=0;j<target.length;j++){
               if(source.charAt(i+j)!=target.charAt(j)){
                   break;
               }
           }
           if(j===target.length){
               return i;
           }
    }
    return -1;
}
console.log(findStr('nihao','hao'));