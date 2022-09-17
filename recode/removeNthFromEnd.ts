/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const nodeMap: Map<number, ListNode> = new Map<number, ListNode>();
    let count: number = 0;
    let cur: ListNode | null = head;
    while(cur !== null) {
        count += 1;
        nodeMap.set(count, cur);
        cur = cur.next;
    }
    if (count === 1) {
        return null;
    }
    if (count - n === 0) {
        return head.next;
    }
    const pre: ListNode | null = nodeMap.get(count - n);
    const target: ListNode | null = nodeMap.get(count - n + 1);
    pre.next = target.next;
    return head;
};