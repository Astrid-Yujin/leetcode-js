/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  const seen = []
  while(head != null) {
        if(seen.indexOf(head) !== -1) {
          return true
        } else {
          seen.push(head)
        }
        head = head.next
  }
  return false
};

// Another

//O(1) Space, 2 pointers
var hasCycle = function(head) {
  let fast = head;
  let slow = head;
  
  while(fast !== null) {
    slow = slow.next;
    
    if (fast.next === null) return false;
    
    fast = fast.next.next;
    
    if(fast === slow) return true;
  }
  
  return false;
}
