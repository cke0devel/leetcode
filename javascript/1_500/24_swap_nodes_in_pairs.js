2/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head == null) return head;
    if (head.next == null) return head;

    const tail = swapPairs(head.next.next);
    const next = head.next;

    head.next = tail;
    next.next = head;

    return next;
};
