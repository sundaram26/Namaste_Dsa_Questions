//Swap Nodes in Pairs(Leetcode-24)
//I/P:- 1 -> 2 -> 3 -> 4 -> null
//O/P:- 2 -> 1 -> 4 -> 3 -> null
import LinkedList from "./00SinglyLinkedList.js";


function swapNodesInPairs(head) {
    let dummy = new LinkedList();
    dummy.next = head;
    let p = dummy;
    let c = head;
    let n = head.next;
    while (c && n) {
        console.log("p: ", p.val, "C: ", c.val, "N: ", n.val);
        p.next = n;
        c.next = n.next;
        n.next = c;

        p = c;
        c = p.next;
        n = c && c.next;
    }
    return dummy.next;
}

const list = new LinkedList();
list.addAtHead(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
// list.addAtTail(5);
// list.addAtTail(6);

console.log("Original Linked List: ", list.print());
const swapped = new LinkedList();
swapped.head = swapNodesInPairs(list.head);

console.log("Swapped List: ", swapped.print());