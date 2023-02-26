/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head == null) return head;
    
    let tail = null;

    const length = (node) => {
        let l = 0;
        while(node != null) {
            l += 1;
            tail = node;
            node = node.next;
        }

        return l;
    };

    const l = length(head);

    k = k % l;
    if (k === 0) {
        return head;
    }

    let newTail = head;
    for (let i=l-k-1; i>0; i--) {
        newTail = newTail.next;
    }

    let newHead = newTail.next;
    newTail.next = null;
    tail.next = head;

    return newHead;
};
