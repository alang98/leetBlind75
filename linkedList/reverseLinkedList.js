// Given the head of a singly linked list, reverse the list, and return the reversed list.



// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]


class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    // this.previous = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node5 = new ListNode(5)

node1.next = node2
node2.next = node3
// node2.previous = node1
node3.next = node4
// node3.previous = node2
node4.next = node5
// node4.previous = node3
node5.next = null
// node5.previous = node4

let list1 = new LinkedList(node1)

console.log(list1);

var reverseList = function(nodeHead) {
  let placeholder = null
  let previous = null

  while (nodeHead) {
    placeholder = nodeHead.next
    nodeHead.next = previous
    previous = nodeHead
    nodeHead = placeholder

  }
  console.log('previous', previous)
  return previous;
}

console.log(reverseList(node1))