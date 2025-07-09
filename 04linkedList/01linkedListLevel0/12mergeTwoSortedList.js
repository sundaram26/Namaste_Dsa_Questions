//Merge Two Sorted List (Leetcode-21)
//I/P:- l1 = 1 -> 3 -> 4 -> 6 -> 9 -> null and l2 = 2 -> 5 -> 7 -> 8 -> null
//O/P:- 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> null

import LinkedList from "./00SinglyLinkedList.js";

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function mergeTwoSortedList(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l2;

    let curr = null;
    if (l1.val < l2.val) {
        curr = l1;
        l1 = l1.next;
    } else {
        curr = l2;
        l2 = l2.next;
    }
    let currHead = curr;
    while (l1 && l2) {
        console.log("curr: ", curr.val, "l1: ", l1.val, "l2: ", l2.val);
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }

        curr = curr.next;
    }

    if (l1) {
        curr.next = l1;
    }
    if (l2) {
        curr.next = l2;
    }

    return currHead;
}

function mergeTwoSortedList2(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l2;
    let start = new Node();
    let curr = start;
    while (l1 && l2) {
        console.log("curr: ", curr.val, "l1: ", l1.val, "l2: ", l2.val);
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }

        curr = curr.next;
    }

    if (l1) {
        curr.next = l1;
    }
    if (l2) {
        curr.next = l2;
    }

    return start;
}

const list1 = new LinkedList();
list1.addAtHead(1);
list1.addAtTail(3);
list1.addAtTail(4);
list1.addAtTail(6);
list1.addAtTail(9);

const list2 = new LinkedList();
list2.addAtHead(2);
list2.addAtTail(5);
list2.addAtTail(7);
list2.addAtTail(8);

console.log("Original List 1: ", list1.print());
console.log("Original List 2: ", list2.print());

const ans = mergeTwoSortedList(list1.head, list2.head);
let mergedList = new LinkedList();
mergedList.head = ans;

console.log(mergedList.print())