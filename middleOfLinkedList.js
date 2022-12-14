/* 
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
*/

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
// We can use approach with fast and slow
//  var middleNode = function(head) {
//     slow = fast = head;
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow;
// };

var middleNode = function(head) {
    let length = 0;
    let result = head;
    
    while(head = head.next) {        
        length++;
    }
    
    for(let i =0; i< (length / 2); i++) {
        result = result.next
    }
    return result
};