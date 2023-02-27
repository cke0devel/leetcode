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
var swapNodes = function(head, k) {
    let l = 0;
    for (let node=head; node!=null; node=node.next) {
        l += 1;
    }

    let front = null;
    let end = null;
    let node = head;
    for (let i=1; i<=l; i++) {
        if (i === k) front = node;
        if (i === l-k+1) end = node;

        node = node.next;
    }

    const t = front.val;
    front.val = end.val;
    end.val = t;

    return head;
};
