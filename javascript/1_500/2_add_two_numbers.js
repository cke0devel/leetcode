/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode();
    let curNode = head;

    let carry = 0;
    while(l1 != null && l2 != null) {
        const v = carry + l1.val + l2.val;

        curNode.next = new ListNode(v % 10);
        carry = Math.floor(v / 10);

        l1 = l1.next;
        l2 = l2.next;
        curNode = curNode.next;
    }

    if (l1 == null) {
        [l1, l2] = [l2, l1];
    }

    while(l1 != null) {
        const v = carry + l1.val;

        curNode.next = new ListNode(v % 10);
        carry = Math.floor(v / 10);

        l1 = l1.next;
        curNode = curNode.next;
    }

    if (carry > 0) {
        curNode.next = new ListNode(carry);
    }

    return head.next;
};
