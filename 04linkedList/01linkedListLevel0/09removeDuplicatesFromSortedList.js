//Remove Duplicates From Sorted List
//I/P:- 1 -> 1 -> 2 -> 3 -> 3
//O/P:- 1 -> 2 -> 3

import LinkedList from "./00SinglyLinkedList.js";


function removeDuplicates(head) {
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
}

const list = new LinkedList();

list.addAtHead(1);
list.addAtTail(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(3);

console.log("Original Linked List: ", list.print());
removeDuplicates(list.head);
console.log("New Linked List: ", list.print());