# Reverse Linked List Prompt

Reverse a singly linked list.

#### Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

## Personal Notes

Can be faster by actually reversing the node orders. This can be done by:

  1. Saving Next
  2. Pointing Current node to previous
  3. Saving previous as current node
  4. current node is Next
   
   
   #### Example:
   var reverseLinkedList = function(linkedlist) {
  var node = linkedlist;
  var previous = null;

  while(node) {
    // save next or you lose it!!!
    var save = node.next;
    // reverse pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node or null at end of list
    node = save;
  }
  return previous;   // Change the list head !!!
}
linkedlist = reverseLinkedList(linkedlist);
