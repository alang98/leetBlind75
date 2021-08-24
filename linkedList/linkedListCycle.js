// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached
// again by continuously following the next pointer. Internally, pos is used to denote the
// index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

/*
  i: linkedList, pos
  o: boolean
  c: n/a
  e: n/a
*/

/*
{
  head.val: 3,
  head.next: -->
}

{
  head.val: 2,
  head.next: -->
}

{
  head.val: 0,
  head.next: -->
}

{
  head.val: -4,
  head.next: -->
}

null

*/

//if we add the node values to a set and then check to see if the
//the set has any of the values as we iterate through the node's next
// value, we can see if we have a cycle

// We create a node constructor function
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// we create a linked list constructor function
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new ListNode(3)
let node2 = new ListNode(2)
let node3 = new ListNode(0)
let node4 = new ListNode(-4)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2

let example1 = new LinkedList(node1)

console.log('head', example1)
console.log(node1.next)

var hasCycle = function(node) {
  //create a set to store the node values in
  let nodeSet = new Set()
  //iterate through the nodes in the list and check to see if
  // the set contains any of the node values
  while (node.next !== null) {
    if (nodeSet.has(node.val)) {
      return true
    } else {
      nodeSet.add(node.val)
      node = node.next
    }
  }
  return false
}

console.log(hasCycle(node1))