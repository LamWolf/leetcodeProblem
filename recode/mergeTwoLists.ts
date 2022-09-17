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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    let left: ListNode | null;
    let right: ListNode | null;
    if(list1.val < list2.val) {
        left = list1;
        right = list2;
    } else {
        left = list2;
        right = list1;
    }
    const head: ListNode | null = new ListNode(left.val);
    let cur: ListNode | null = head;
    left = left.next;
    while(left !== null && right !== null) {
        if (left.val < right.val) {
            cur.next = left;
            left = left.next;
        } else {
            cur.next = right;
            right = right.next;
        }
        cur = cur.next;
    }
    if (left === null) {
        cur.next = right;
    } else {
        cur.next = left;
    }
    return head;
};