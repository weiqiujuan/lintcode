function levelOrder(arr){
    var res=[]
    var tempArr=[]
    var levelNum=1 //每层的节点数
    var levelTotal=1 //层的阶乘
    for(var i=0;i<arr.length+1;i++){
        if(arr[i]=='#'){arr[i]=undefined}
        if(i<levelTotal){
            tempArr.push(arr[i])
        }else if(i==levelTotal){ //等于的时候退出子数组，往res中push
            res.push(tempArr)
            tempArr=[] //清空子数组
            tempArr.push(arr[i])
            levelNum*=2
            levelTotal+=levelNum
        }
    }
    return res
}

console.log(levelOrder( [3,9,20,'#','#',15,7] ));