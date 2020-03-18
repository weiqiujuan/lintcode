/*在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。*/
/*输入数组：

[
  [1,2,8,9]，
  [2,4,9,12]，
  [4,7,10,13]，
  [6,8,11,15]
]
如果输入查找数值为7，则返回true，
如果输入查找数值为5，则返回false。*/

/*思路：因为从左到右，从上到下递增，从头（数组的第一个个数组元素的第一个元素）开始我们无法顾及两个变化，
* 所以可以取右上角的那个数开始，比它大的向下走，比它小的向左走
* 也可以取左下角, 比他小的向上走，比它大的向左走
* 注意判断临界值
* */

/**
 * @param {number[][]} array
 * @param {number} num
 * @return {boolean}
 */
const searchArray = function(array, num) {
    let col =  0
    let row;
    if(!array.length || !num){
        return false
    }else{
        row = array[0].length-1
    }
    while (row>=0 && col <= array.length-1){
        if(array[col][row] === num){
            return true
        }else if(array[col][row] > num){
            row--
        }else{
            col++
        }
    }
    return false
}


const main = searchArray([
    [1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]], 16)
console.log(main)