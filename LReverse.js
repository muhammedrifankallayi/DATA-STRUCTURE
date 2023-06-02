class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
  
    while (current !== null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
  
    return prev;
  }
  
  // Test the code
  // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
  let head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(49);
  head.next.next.next.next = new ListNode(5);
  
  // Reverse the linked list
  let reversedHead = reverseLinkedList(head);
  
  // Print the reversed linked list: 5 -> 4 -> 3 -> 2 -> 1
  let current = reversedHead;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  