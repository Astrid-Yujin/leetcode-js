/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let prev = null;
  let cur = head;
  let tmp;
  let tmpNext;
  while (cur !== null) {
    tmp = cur;
    tmpNext = cur.next;
    cur.next = prev;
    prev = tmp;
    cur = tmpNext;
  }

  return prev;
};

// another

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  if (head === null) return head;
  
  let current = head;
  let result;
  
  while (current) {
    result = new ListNode(current.val, result);
    current = current.next;
  }
  
  return result;
};
