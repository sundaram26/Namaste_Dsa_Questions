//Palindrome Linked List - (Leetcode - 234)
import LinkedList from "./00SinglyLinkedList.js";

function isPalindrome(head) {
    //1) finding the middle node
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    //now slow is the middle node

    //2) reverse the second half of linked list
    let prev = null;
    let curr = slow;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    console.log(list.print())
    //now prev become head of the 2nd half

    //3) compare the 1st and 2nd half of linked list to find palindrome
    while (prev) {
        if (prev.val !== head.val) {
            return false;
        }
        prev = prev.next;
        head = head.next;
    }
    return true;

    //if question want linked list should not be destructure then we have to again make linked list as original but for now it is ok
}

const list = new LinkedList();

list.addAtHead(1);
list.addAtTail(0);
list.addAtTail(0);
// list.addAtTail(3);
// list.addAtTail(2);
// list.addAtTail(1);

console.log("Original Linked List: ", list.print())
console.log("Is Palindrome: ", isPalindrome(list.head))