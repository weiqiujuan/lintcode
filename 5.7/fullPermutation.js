function permutation(nums) {

    if(nums===null) return [];
    if(nums.length===0) return [[]];
    let result=[];
    let subRes=[];
    let set=new Set();

    judge(nums,subRes,set,result);

    return result;

}
function judge(nums,subRes,set,result){

    if(subRes.length===nums.length){
        result.push(subRes.concat([]));
    }

    let len=nums.length;
    for(let i=0;i<len;i++){
        if(!set.has(nums[i])){
            set.add(nums[i]);
            subRes.push(nums[i]);
            judge(nums,subRes,set,result);
            subRes.pop();
            set.delete(nums[i]);
        }
    }
}


let test = [3, 4, 5];
console.log(permutation(test));