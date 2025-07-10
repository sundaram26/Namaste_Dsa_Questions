//Rotate List(Leetcode-61)
import LinkedList from "./00SinglyLinkedList.js";


function rotateLinkedList(list, k) {
    if (!list) return list;
    let countTail = 1;
    let findTail = list;
    while(findTail.next) {
        findTail = findTail.next;
        countTail++;
    }
    k = k % countTail;
    let slow = list;
    let fast = list;
    let count = 0;
    while (fast.next) {
        if (count < k) {
            console.log("fast: ", fast.val);
            fast = fast.next;
            count++;
        } else {
            slow = slow.next;
            fast = fast.next;
        }
    }
    fast.next = list;
    let newHead = slow.next;
    slow.next = null;

    return newHead;
}

const list = new LinkedList();
list.addAtHead(0);
list.addAtTail(1);
list.addAtTail(2);
// list.addAtTail(4);
// list.addAtTail(5);

console.log("Print Linked List: ", list.print())

const result = rotateLinkedList(list.head, 4);
const rotatedList = new LinkedList();
rotatedList.head = result;

console.log("Rotated List: ", rotatedList.print());

