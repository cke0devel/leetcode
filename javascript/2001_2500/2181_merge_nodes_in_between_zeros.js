/**
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
var mergeNodes = function(head) {
    let list = null;
    let node = null;

    let sum = 0;
    head = head.next;
    for (let u=head; u != null; u=u.next) {
        if (u.val === 0) {
            if (node == null) {
                list = new ListNode(sum);
                node = list;
            } else {
                node.next = new ListNode(sum);
                node = node.next;
            }
            sum = 0;
        } else {
            sum += u.val;
        }
    }

    return list;
};
