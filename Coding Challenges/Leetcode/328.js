/*Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

  You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

  Example 1:

  Input: 1->2->3->4->5->NULL
  Output: 1->3->5->2->4->NULL
  Example 2:

  Input: 2->1->3->5->6->4->7->NULL
  Output: 2->3->6->7->1->5->4->NULL
  Note:

  The relative order inside both the even and odd groups should remain as it was in the input.
  The FIRST node is considered ODD, the second node EVEN and so on ...
  */


/*PSEUDO
 - create a class constructor with val and next
 - create a class for ListNode with head, tail, length
 - extantiate variables current = val, temp = val, tempTail = tail, counter = 1

**create two new lists: EvenList & OddList
 - loop over the node list using while counter < list length
 - Even goes to EvenList
 - Odd goes to OddList
 - Once the loop is complete link the tail.next of the OddList to EvenList




 //  BASE CASE: if counter % 2 != 0 && tempTail === true => return
 // - if counter % 2 != 0 => temp = current; counter++;
 //
 // - if counter % 2 == 0 =>
 //    * temp.next = current.next
 //    * this.tail = current
 //    * this.tail.next = this.tail or null

 - return the node list
*/

//   CODE
// Definition for singly-linked list.
class ListNode(val) {
    this.val = val;
    this.next = null;
}

class nodeList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    var OddList = new ListNode(head);
    var EvenList = new ListNode(head);

    let counter = 0;
    current = head;

    //look for even
    while(current.next){
        if(counter % 2 === 0){
            if(EvenList.length === 0){
                this.head = EvenList;
                this.tail = this.head;
            }else{
                this.tail.next = EvenList;
                this.tail = EvenList;
            }
        }else{
            if(OddList.length === 0){
                this.head = OddList;
                this.tail = this.head;
            }else{
                this.tail.next = OddList;
                this.tail = OddList;
            }
        }

        current = current.next;
        counter++;
        console.log(EvenList, OddList)
    }

    return head

};


//   TEST
console.log(oddEvenList([1,2,3,4,5]))