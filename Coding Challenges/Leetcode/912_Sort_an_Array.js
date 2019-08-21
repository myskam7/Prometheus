/*912. Sort an Array
Medium

112

117

Favorite

Share
Given an array of integers nums, sort the array in ascending order.



Example 1:

Input: [5,2,3,1]
Output: [1,2,3,5]
Example 2:

Input: [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]


Note:

1 <= A.length <= 10000
-50000 <= A[i] <= 50000*/



// SOLUTION
// (Insertion Sort Method)
// Time Complexity: O(n^2)
// Auxiliary Space Complexity:O(1)
var sortArray = function(nums) {

    for(var i = 1; i < nums.length; i++){
        let current = nums[i];

        for(var j = i - 1; j >= 0 && nums[j] > current; j--){

            nums[j+1] = nums[j];
        }
        nums[j+1] = current;

    }

    return nums;

};


//TEST
console.table([
    sortArray([3,9,1,4,7]),
    sortArray([65,23,34,5,14]),
    sortArray([6,3,4,5,14]),
    sortArray([5,2,3,9,1])
])