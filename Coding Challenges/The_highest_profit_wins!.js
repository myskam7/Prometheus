//
// Task
//
// Write a function that returns both the minimum and maximum number of the given list/array.
//
//     Examples
//
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
// Remarks
//
// All arrays or lists will always have at least one element,
// so you don't need to check the length. Also, your function
// will always get an array or a list, you don't have to check
// for null, undefined or similar.
//





//SOLUTION
function minMax(arr){
    let min = arr[0];
    let max = arr[0];
    let i = 0
    while(i < arr.length){
        if(arr[i] > max){
            max = arr[i];
        }else if(arr[i] < min){
            min = arr[i]
        }
        i++;
    }
    return [min, max]; // fix me!
}


//TEST
