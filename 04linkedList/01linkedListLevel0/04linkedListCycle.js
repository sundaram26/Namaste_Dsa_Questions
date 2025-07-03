//Linked List Cycle:-(Leetcode-141);
import LinkedList from "./00SinglyLinkedList.js";

//using hashtable
function hasCycle(head) {
    const newSet = new Set();
    let curr = head;
    while (curr.next !== null){
        if (newSet.has(curr)) return true;
        newSet.add(curr);
        curr = curr.next;
    }
    return false;
}

function hasCycle2(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

const list = new LinkedList();
list.addAtHead(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);
list.circular(1, 6);

console.log("Original Linked List: ", list.print());

console.log("isCircular: ", hasCycle(list.head));
console.log("isCircular: ", hasCycle2(list.head));