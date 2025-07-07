//Odd Even Linked List - Leetcode 328
//I/P:- 2 -> 1 -> 3 -> 5 -> 6 -> 4 -> 7 -> null
//O/P:- 2 -> 3 -> 6 -> 7 -> 1 -> 5 -> 4 -> null
import LinkedList from "./00SinglyLinkedList.js";

function oddEvenLinkedList(head) {
    let odd = head;
    let even = head.next;
    let evenStart = even;
    while (odd.next && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenStart;

    return head;
}

const list = new LinkedList();
list.addAtHead(2);
list.addAtTail(1);
list.addAtTail(3);
list.addAtTail(5);
list.addAtTail(6);
list.addAtTail(4);
list.addAtTail(7);

console.log("Original Linked List: ", list.print());
oddEvenLinkedList(list.head);
console.log("New Linked List: ", list.print());