/*
* 160. Intersection of Two Linked Lists
Easy

Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:


begin to intersect at node c1.



Example 1:


Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.


Example 2:


Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [0,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.


Example 3:


Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only*/





//PSEUDO
// - Create temp variables for headA and headB. listA = headA, listB = headB
// - LOOP over the two lists WHILE listA != listB
// - set condition for both listA and listB:
//   * if(list is over reassign current temp variable to the other ORIGINAL list
// - if listA === listB: RETURN listA or listB;
// - if LOOP end and listA != listB: RETURN NULL



//CODE

function ListNode(val) {
    this.val = val;
    this.next = null;
 }

 class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


     append(value) {
         var newNode = new ListNode(value);
         if(!this.head){
             this.head = newNode;
             this.tail = this.head;
         }else{
             this.tail.next = newNode; //1 - create a new node
             this.tail = newNode;      //2 -  re-assign tail to the new node
             /*WRONG WAY
              1 - this.tail = newNode;
              2 - this.tail.next = newNode;
              THIS^ will result in tail being null because by default tail is null
             * */

         }
         this.length++;

     }



      getIntersectionNode(headA, headB) {
         if(!headA || !headB) return null;

         let listA = headA;
         let listB = headB;

         while(listA != listB){
             // console.log(listA, listB);
             listA = !listA ?  headB : listA.next;
             listB = !listB ?  headA : listB.next;
             console.log(listA != listB);

         }
         return listA != listB || null ;
     };

 }


//TEST
let testCount = [0, 0];

assert(testCount, 'able to assign a value upon instantiation', () => {
    let node1 = new LinkedList();
    let node2 = new LinkedList();
    let inter = new LinkedList();

    //List 1
    node1.append(4);
    node1.append(1);
    node1.append(8);
    node1.append(4);
    node1.append(5);

    //List 2
    node2.append(5);
    node2.append(0);
    node2.append(1);
    node2.append(8);
    node2.append(4);
    node2.append(5);


   var res = inter.getIntersectionNode(node1, node2);


    console.log(res);
    return inter;
});

// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
function assert(count, name, test) {

    if (!count || !Array.isArray(count) ) {
        count = [0, '*'];
    } else {
        count[1]++;
    }

    let pass = 'false';
    let errMsg = null;
    try {
        if (test()) {
            pass = ' true';
            count[0]++;
        }
    } catch(e) {
        errMsg = e;
    }
    console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
    if (errMsg !== null) {
        console.log('       ' + errMsg + '\n');
    }
}

