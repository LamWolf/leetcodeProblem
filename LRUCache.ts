class DoubleLinkedList {
    public val: number;
    public readonly key: number;
    public pre: DoubleLinkedList | null;
    public next: DoubleLinkedList | null;
    constructor(key: number, value: number) {
        this.val = value;
        this.key = key;
        this.pre = null;
        this.next = null;
    }
}
class LRUCache {
    constructor(capacity: number) {
        this.lruMap = new Map();
        this.capacity = capacity;
        this.head = new DoubleLinkedList(-1, 0);
        this.tail = new DoubleLinkedList(-2, 0);
        this.head.next = this.tail;
        this.tail.pre = this.head;
    }

    private lruMap: Map<number, DoubleLinkedList>;
    private head: DoubleLinkedList;
    private tail: DoubleLinkedList;
    private capacity: number;

    get(key: number): number {
        if (this.lruMap.has(key)) {
            const cur = this.lruMap.get(key);
            const pre = cur.pre;
            const next = cur.next;
            pre.next = next;
            next.pre = pre;
            this.tail.pre.next = cur;
            cur.next = this.tail;
            this.tail.pre = cur;
            return cur.val;
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        if (this.lruMap.has(key)) {
            const cur = this.lruMap.get(key);
            cur.val = value;
            cur.pre.next = cur.next;
            cur.next.pre = cur.pre;
            cur.next = this.tail;
            this.tail.pre = cur;
        } else {
            const len = this.lruMap.size;
            const cur = new DoubleLinkedList(key, value);
            if (len < this.capacity) {
                cur.next = this.tail;
                cur.pre = this.tail.pre;
                this.tail.pre.next = cur;
                this.tail.pre = cur;
                this.lruMap.set(key, cur);
            } else {
                const old = this.head.next;
                const oldKey = old.key;
                this.lruMap.delete(oldKey);
                this.head.next = old.next;
                console.log(old);
                old.next.pre = this.head;

                cur.pre = this.tail.pre;
                cur.next = this.tail;
                this.tail.pre.next = cur;
                this.tail.pre = cur;
                this.lruMap.set(key, cur);
            }
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const operation = ["LRUCache","put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get","get","get","put","put","put","put","get","put","put","put","put","put","put","put"];
const values = [[10],[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]];

for(let i = 0; i < operation.length; i++) {
    const ope = operation[i];
    const val = values[i];
    let lru: LRUCache = null;
    switch(ope) {
        case 'LRUCache':
            lru = new LRUCache(val[0]);
            console.log('null');
        case 'put':
            lru.put(val[0], val[1]);
            console.log('null');
        case 'get':
            console.log(lru.get(val[0]));
        default:
            console.log('nothing');
    }
}