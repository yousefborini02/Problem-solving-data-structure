// Q1 

function reverseArray(arr) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
      stack.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i] = stack.pop();
    }
    return arr;
  }
  
  let arr = [1, 2, 3, 4, 5];
  console.log(reverseArray(arr)); 

  //----------------------------------------------------------------------------------------------------
  
  // Q2


  class Queue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(element) {
      this.stack1.push(element);
    }
  
    dequeue() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      if (this.stack2.length === 0) {
        throw new Error("Queue is empty");
      }
      return this.stack2.pop();
    }
  }
  
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.dequeue()); 
  console.log(queue.dequeue()); 
  queue.enqueue(4);
  console.log(queue.dequeue()); 
  console.log(queue.dequeue()); 
  
  
  //----------------------------------------------------------------------------------------------------
  
  // Q3 


  function recursiveSum(arr, n) {
      if (n <= 0) {
          return 0;
      }
      return arr[n-1] + recursiveSum(arr, n-1);
  }
  
  let arr2 = [1, 2, 3, 4, 5];
  console.log(recursiveSum(arr2, arr2.length)); 
  

  //----------------------------------------------------------------------------------------------------
  
  // Q4 


  class ListNode {
    constructor(value) {
      this.value = value;
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
  
  let head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head = reverseLinkedList(head);
  while (head !== null) {
    console.log(head.value);
    head = head.next;
  }

  
  //----------------------------------------------------------------------------------------------------
 
  // Q5 


  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function deleteMiddleNode(head) {
    if (head === null || head.next === null) {
      return null;
    }
  
    let slow = head;
    let fast = head;
    let prev = null;
  
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }
  
    prev.next = slow.next;
  
    return head;
  }
  
  let head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  
  head = deleteMiddleNode(head);
  while (head !== null) {
    console.log(head.value);
    head = head.next;
  }
  
  
  