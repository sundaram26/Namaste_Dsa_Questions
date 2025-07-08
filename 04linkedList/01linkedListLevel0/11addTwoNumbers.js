//Add Two Numbers (Leetcode-2):-
//I/P:- l1 = 3 -> 4 -> 9 -> null; l2 = 4 -> 8 -> 1 -> 9 -> null
//O/P:- 7 -> 2 -> 1 -> 0 -> 1

import LinkedList from "./00SinglyLinkedList.js";


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function addTwoNumbers(head1, head2) {
    let carry = 0;
    let add = new Node(0)
    let curr = add;
    while (head1 || head2 || carry) {
        let val1 = head1 ? head1.val : 0;
        let val2 = head2 ? head2.val : 0;
        // console.log(val1, "+", val2)
        let sum = val1 + val2 + carry;
        let digit = sum % 10;
        carry = Math.floor(sum / 10);
        curr.next = new Node(digit);
        // console.log("= ", curr.next);
        curr = curr.next;

        head1 = head1 && head1.next;
        head2 = head2 && head2.next;
    }

    return add.next;
}

const l1 = new LinkedList();
l1.addAtHead(3);
l1.addAtTail(4);
l1.addAtTail(9);

const l2 = new LinkedList();
l2.addAtHead(4);
l2.addAtTail(8);
l2.addAtTail(1);
l2.addAtTail(9);

console.log("first list: ", l1.print());
console.log("second List: ", l2.print());
const addList = addTwoNumbers(l1.head, l2.head);
const result = new LinkedList();
result.head = addList;
console.log("Addition List: ", result.print());