function sortList(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    if (head.next === null) return head;
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    let pre: ListNode | null = null;
    while(fast !== null) {
        pre = slow;
        slow = slow.next;
        fast = fast.next ? fast.next.next : null;
    }
    slow.next = null;
    let newHead = comList(sortList(head), sortList(slow));
    return newHead;
};

function comList(left: ListNode | null, right: ListNode | null): ListNode | null {
    let i: ListNode | null = left;
    let j: ListNode | null = right;
    let head: ListNode | null = null;
    if (i.val < j.val) {
        head = i;
        i = i.next;
    } else {
        head = j;
        j = j.next;
    }
    let cur: ListNode | null = head;
    while(i !== null && j !== null) {
        if (i.val < j.val) {
            cur.next = i;
            i = i.next;
        } else {
            cur.next = j;
            j = j.next;
        }
        cur = cur.next;
    }
    if (i !== null) {
        cur.next = i;
    } else {
        cur.next = j;
    }
    return head;
}

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}