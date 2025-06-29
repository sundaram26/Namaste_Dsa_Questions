//design a linked list:- (Leetcode-707)

//this is the single node for singly linked list
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//this is the linked list(created using multiple single Nodes)
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addAtHead(val) {
        let newNode = new Node(val); //create the new node with value val
        newNode.next = this.head;  //point new node's next to the current head
        this.head = newNode;  //point current head to the newNode
        this.size++;  //increase the size of the linked list
    }

    addToTail(val) {
        let newNode = new Node(val);  //create the new node with the value val

        if (this.head === null) {  //corner case:- if the head is null(size of linked list is 0)
            this.head = newNode;    //point the current head to the newNode
        } else {
            let curr = this.head;  //initialize the new pointer which points to the head
            while (curr.next !== null) { //loop to reach the last element in the linked list
                curr = curr.next;  //point the curr pointer to it's next
            }
            curr.next = newNode;  //when curr.next is null then curr.next point the newNode(now the last element in the linked list is newNode)
        }
        this.size++;  //after adding new element increase the size of the element.
    }

    addAtIndex(index, val) {
        if (index < 0 || index > this.size) return; //index is out of bound
        let newNode = new Node(val);    //create the new Node
        
        //corner cases:-
        if (index === 0) {   //if wanted to add at the head
            this.addAtHead(val);    //use the addAtHead function already created in the class
            return;     //return because we are already increasing the size in that function
        } else if (index === this.size) {   //if wanted to add the value at last index
            this.addToTail(val);    //use the addAtTail function already created in the class
            return;     //return beacuse we are increasing the size in the addToTail function
        }

        //normal cases:-
        let curr = this.head;   //initialize the pointer which points to head
        for (let i = 0; i < index - 1; i++){    //run a loop to react the index-1 position
            curr = curr.next;   //assign curr.next to curr
        }
        newNode.next = curr.next;   //point newNode's next to current's next before pointing current next to the new node
        curr.next = newNode;    //point the current's next to the newNode
        this.size++;    //increase the size of the linked list
    }

    get(index) {
        //corner cases:-
        if (index < 0 || index >= this.size) return -1; //if invalid index
        let curr = this.head;   //initialize the pointer pointing to head
        for (let i = 0; i < index; i++){    //loop to reach the index
            curr = curr.next;   //move the curr to next element
        }
        return curr.val;    //return the value of the current node
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return;  //index is out of bound
        if (index === 0) { //if deleting head
            this.head = this.head.next; //point the head to the head's next
        } else {
            let curr = this.head;  //initialize the pointer pointing to the head
            for (let i = 0; i < index - 1; i++){ //loop to reach the index - 1;
                curr = curr.next;   //curr to curr's next
            }
            curr.next = curr.next.next;     //point curr's next to curr's next to next
        }
        this.size--; //reduce the size of linked list
    }

}


// Instantiate the linked list
const myList = new LinkedList();

// Test addAtHead
myList.addAtHead(10);    // List: 10
myList.addAtHead(20);    // List: 20 -> 10

// Test addToTail
myList.addToTail(30);    // List: 20 -> 10 -> 30

// Test addAtIndex
myList.addAtIndex(1, 15);  // List: 20 -> 15 -> 10 -> 30

// Test get
console.log("Element at index 2:", myList.get(2));  // Expected: 10

// Test deleteAtIndex
myList.deleteAtIndex(1);   // Removes 15, List: 20 -> 10 -> 30

// Print list to verify
let curr = myList.head;
let result = [];
while (curr) {
    result.push(curr.val);
    curr = curr.next;
}
console.log("Final Linked List:", result.join(" -> "));  // Expected: 20 -> 10 -> 30
