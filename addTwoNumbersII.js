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
var addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2) return null;
    if(!l1 && l2) return l2;
    if(l1 && !l2) return l1;

    let stack1 = [];
    let stack2 = [];

    let node = l1;
    while (node){
        stack1.push(node.val)
        node = node.next;
    }

    let node2 = l2;
    while (node2){
        stack2.push(node2.val)
        node2 = node2.next;
    }

    let n= new ListNode()
    let head = n;
    let l= stack1.pop();
    let r =stack2.pop();

    let isJinwei = 0;
    while ( l || r){
        head.val = (isJinwei+l+r)%10;
        isJinwei =(isJinwei+l+r)>9?1:0;
        let newNode = new ListNode();
        if(stack1.length && stack2.length){
            l = stack1.pop();
            r = stack2.pop()
        }else if (!stack1.length && !stack2.length) {
            if(isJinwei){
                newNode.val=1;
                newNode.next = head;
                head =newNode;
            }
            break
        }else if(stack1.length && !stack2.length){
            l =stack1.pop();
            r=0;
        }else if (!stack1.length && stack2.length){
            r=stack2.pop()
            l=0
        }
        newNode.next = head;
        head = newNode;
    }
    return head;
};
