//Intersection of Two Linked Lists(Leetcode - 160)
import LinkedList from "./00SinglyLinkedList.js";

function intersectionOfLinkedLists(headA, headB) {
    const newSet = new Set();
    let curr = headB;
    while (curr) {
        newSet.add(curr);
        curr = curr.next;
    }

    let curr2 = headA;
    while (curr2) {
        if (newSet.has(curr2)) return curr2;
        curr2 = curr2.next;
    }
    return 0;
}

const listA = new LinkedList();
const listB = new LinkedList();

listA.addAtHead(4);
listA.addAtTail(1);
listA.addAtTail(8);
listA.addAtTail(4);
listA.addAtTail(5);

listB.addAtHead(5);
listB.addAtTail(6);
listB.addAtTail(1);

const intersectionNode = listA.getNodeAtIndex(2);
listB.getTail().next = intersectionNode

console.log("list A: ", listA.print());
console.log("list B: ", listB.print());

console.log("Intersection Node: ", intersectionOfLinkedLists(listA.head, listB.head))