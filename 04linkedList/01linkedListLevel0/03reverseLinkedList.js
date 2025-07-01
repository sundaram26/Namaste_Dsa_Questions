//reverse the linked list
//I/P:- 1 -> 2 -> 3 -> 4 -> 5 -> null
//O/P:- 5 -> 4 -> 3 -> 2 -> 1 -> null
import LinkedList from "./00SinglyLinkedList.js";


function reverseLinkedList(head) {
    let prev = null;
    let curr = head;
    while (curr != null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}

const list = new LinkedList();

list.addAtHead(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);
list.addAtTail(6);
console.log("Linked List: ");
list.print()
const revList = reverseLinkedList(list.head);
list.head = revList;
list.print()