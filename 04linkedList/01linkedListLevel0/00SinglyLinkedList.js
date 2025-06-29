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

    // Print the whole list
    print() {
        let curr = this.head;
        const result = [];
        while (curr) {
            result.push(curr.val);
            curr = curr.next;
        }
        console.log(result.join(" -> ") + " -> NULL");
    }

    // // Convert list to array (for testing)
    // toArray() {
    //     let curr = this.head;
    //     const result = [];
    //     while (curr) {
    //         result.push(curr.val);
    //         curr = curr.next;
    //     }
    //     return result;
    // }
}

export default LinkedList;