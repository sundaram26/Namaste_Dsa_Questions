//Remove Nth Element From End of Linked List
//I/P:- 1 -> 2 -> 3 -> 4 -> 5 and val = 2;
//O/P:- 1 -> 2 -> 3 -> 5

import LinkedList from "./00SinglyLinkedList.js";

function removeElemFromEnd(head, val) {
    let sentinel = new LinkedList();
    sentinel.next = head;
    let curr = head;
    let length = 0;
    while (curr) {
        curr = curr.next;
        length++;
    }

    let delPrevPos = length - val;
    let prev = sentinel;
    for (let i = 0; i < delPrevPos; i++){
        prev = prev.next;
    }
    prev.next = prev.next.next;

    return sentinel.next;
}

const list = new LinkedList();
list.addAtHead(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);

console.log("Original Linked List: ", list.print());
removeElemFromEnd(list.head, 2);
console.log("New Linked List: ", list.print());