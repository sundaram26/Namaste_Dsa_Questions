//find the middle of the linked list
//if even then return the middle element and if odd then return second middle.
import LinkedList from "./00SinglyLinkedList.js";

function middleOfLinkedList(head) {
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const list = new LinkedList();
list.addAtHead(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);
list.addAtTail(6);
list.addAtTail(7);
list.addAtTail(8);
list.addAtTail(9);
console.log("Linked List: ");
list.print();

console.log("Middle node value is: ", middleOfLinkedList(list.head))