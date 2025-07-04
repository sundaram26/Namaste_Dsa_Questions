// Node for singly linked list
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Singly Linked List implementation
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add value at head
    addAtHead(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Add value at tail
    addAtTail(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }

    // Add value at specific index
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) return;

        if (index === 0) {
            this.addAtHead(val);
            return;
        }

        if (index === this.size) {
            this.addAtTail(val);
            return;
        }

        const newNode = new Node(val);
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
        this.size++;
    }

    circular(index, val) {
        if (index < 0 || index > this.size) return;
        let newNode = new Node(val);
        let circ = this.head;

        for (let i = 0; i < index; i++) {
            circ = circ.next;
        }

        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode;
        newNode.next = circ;

        this.size++;
    }

    // Delete node at specific index
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return;

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            curr.next = curr.next.next;
        }
        this.size--;
    }

    // Get value at specific index
    get(index) {
        if (index < 0 || index >= this.size) return -1;

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.val;
    }

    // Get node object at specific index (not just value)
    getNodeAtIndex(index) {
        if (index < 0 || index >= this.size) return null;

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr;
    }

    // Get tail node of the list
    getTail() {
        if (!this.head) return null;
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        return curr;
    }

    // Print the whole list
    print() {
        const result = [];
        const visited = new Set();
        let current = this.head;

        while (current) {
            if (visited.has(current)) {
                result.push(`[Cycle detected at ${current.val}]`);
                break;
            }
            result.push(current.val);
            visited.add(current);
            current = current.next;
        }

        return result.join(" -> ");
    }
}

export default LinkedList;