/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
     this.val = val;
     this.next = null;
}

// let addTwoNumbers = function(l1, l2){
//     if(l1===null) return l2;
//     if(l2===null) return l1;
//     let first = new ListNode(null);
//     let head1 = l1, head2 = l2, head = first;
//     let flag = false;// 判断是否要进位
//     while (head1!==null || head2!==null || flag ){
//         let t = 0;
//         if (head1 === null){
//             t = head2 ? head2.val :0 ;
//         }else if(head2 === null){
//             t = head1 ? head1.val :0 ;
//         }else{
//             t = head1.val +head2.val;
//         }
//         flag && (t+=1) && (flag = false);
//         t>9 &&(flag = true);
//
//         if(head.val === null){
//             head.val = t % 10;
//         }else{
//             head.next = new  ListNode(t% 10);
//             head = head.next;
//         }
//
//         head1 = head1 === null? head1: head1.next;
//         head2 = head2 === null? head2: head2.next;
//     }
//
//     return first;
// };
//
// console.log(addTwoNumbers([1,2,3],[4,5,6]))

let addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let head = {};
    let cur = head;
     while (l1||l2|| sum){
         sum += (l1&&l1.val)+(l2 && l2.val)
         cur = cur.next = new ListNode(sum%10);
          l1=l1 && l1.next
         l2 = l2 && l2.next
         sum= Math.floor(sum/10)
     }
     return head.next
};
console.log(addTwoNumbers([1,2,3],[4,5,6]));
