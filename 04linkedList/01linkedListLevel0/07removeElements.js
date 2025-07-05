//Remove Linked List Elements (Leetcode-203)
//I/P:- 1->2->6->3->4->5->6 and val = 6
//O/P:- 1->2->3->4->5

import LinkedList from "./00SinglyLinkedList.js";

function removeElement(head, val) {
    let sentinel = new LinkedList();
    sentinel.next = head;
    let prev = sentinel;
    let curr = head;

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return sentinel.next;
}

const list = new LinkedList();
list.addAtHead(1);
list.addAtTail(2);
list.addAtTail(6);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);
list.addAtTail(6);

console.log("Original Linked List: ", list.print());
removeElement(list.head, 6);
console.log("New Linked List: ", list.print());