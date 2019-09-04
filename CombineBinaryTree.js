/*
# Binary Trees - Merge Binary Trees

#### Prompt

Given two binary trees, imagine that when you
put one of them to cover the other, some nodes
of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree.
The merge rule is that if two nodes overlap, then
sum node values up as the new value of the merged node.
Otherwise, the NOT null node will be used as the node
of new tree.

#### Examples
Input: root1 { BinaryTreeNode }, root2 { BinaryTreeNode }


Tree 1                     Tree 2

      1                         2
     / \                       / \
    3   2                     1   3
   /                           \   \
  5                             4   7


Output: { BinaryTreeNode }

Merged tree:
      3
     / \
    4   5
   / \   \
  5   4   7


#### Constraints
Time Complexity: O(N)
Space Complexity: O(N)


The merging process must start from the root
nodes of both trees.

#### Resources

[Binary Tree Traversals](http://www.ida.liu.se/opendsa/OpenDSA/Books/TDDD86_2014/html/BinaryTreeTraversal.html)

  #### Hints

1. How can you traverse through both trees at the same time?
2. What happens when one of the nodes is null/None?
3. How can you break this problem into two smaller problems ? ie.When should you merge, and when should you copy ?

#### Solution

YOUR WORK HERE
*/


class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// DO NOT EDIT
// generate tree from array
function deserialize(arr) {
    if (arr.length === 0) { return null; }
    let root = new TreeNode(arr[0]);
    let queue = [root];
    for (let i = 1; i < arr.length; i += 2) {
        let current = queue.shift();
        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
            current.right = new TreeNode(arr[i + 1]);
            queue.push(current.right);
        }
    }
    return root;
}

let root1 = deserialize([1, 3, 2,5 ,  null, null, null,10, 20]);
let root2 = deserialize([2,1,3,null,4,null,7]);

// console.log(root1);
// console.log(root2);





function combine(root1, root2) {
    if (root1 === null && root2 === null) {
        return null;
    }
    if (root1 !== null && root2 === null) {
        return root1;
    }
    if (root2 !== null && root1 === null) {
        return root2;
    }

    let result = new TreeNode(root1.value + root2.value);

    result.left = combine(root1.left, root2.left);
    result.right = combine(root1.right, root2.right);

    return result;
}




console.log(combine(root1, root2));


// Highest value combined//

// function getMaxCombinedValue(root1, root2) {
//     let result = 0;
//     function traverse(current1, current2) {
//         if (current1 === null && current2 === null) {
//             return;
//         }
//         if (current1 !== null && current2 === null) {
//             singleTreeMax(current1);
//             return;
//         }
//         if (current2 !== null && current1 === null) {
//             singleTreeMax(current2);
//             return;
//         }
//
//         result = Math.max(result, current1.value + current2.value);
//
//         traverse(current1.left, current2.left);
//         traverse(current1.right, current2.right);
//     }
//
//     function singleTreeMax(current) {
//         if (current === null) {
//             return;
//         }
//
//         result = Math.max(current.value, result);
//
//         singleTreeMax(current.left);
//         singleTreeMax(current.right);
//     }
//
//     traverse(root1, root2);
//
//     return result;
// }
//
// console.log(getMaxCombinedValue(root1, root2));
//
//
