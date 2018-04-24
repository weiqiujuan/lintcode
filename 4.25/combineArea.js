function merge(intervals){
    intervals.sort((a,b)=>{
          if(a[0]!=b[0]){
              return a[0]-b[0];
          }else{
              return a[1]-b[1];
          }
    })//将数组区域进行一个排序
    let len=intervals.length;
    let res=[],start,end;
    for(let i=0;i<len;i++){
        let s=intervals[i][0],e=intervals[i][1];
        if(!start){
            start=s,end=e
        }else if(s<=end){//取出重合区间值
            end=Math.max(end,e)
        }else{
            let part=[start,end];
            res.push(part);
            start=s;
            end=e;
        }
    }
    if(start){
        let part=[start,end];
        res.push(part);
    }
    return res;
}
let arr=[[1,3],[8,10],[2,6],[9,11]];
console.log(merge(arr));