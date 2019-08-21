
// BUBBLE SORT
function bubble(arr){
    var noSwaps;
    for(var j = arr.length; j > 0; j--){ // we go from end to zero, this way we can shrink the array
        noSwaps = true;
        count = 1;
        for(var i = 0; i < j - 1; i++){ // as j is shrinkin we will compare i to last item j in array
            console.log(arr,arr[i], arr[i+1], count)
            if(arr[i] > arr[i + 1]){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                noSwaps = false;
            }
            count++;
        }
        if(noSwaps) break; // checks if anything has been swapped, would avoid j going all the way to 0
    }
    return arr

}

// TEST
// console.log(bubble([5,1,8,4,3]));

// console.log(bubble([8,2,1,3,4,5,6,7]));



// SELECTION SORT
function selection(arr){
    let min;
    let count = 0;
    for(var j = 0; j < arr.length; j++){
        min = j;

        for(var i = j + 1; i < arr.length; i++){
            if(arr[i] < arr[min]){
                min = i
            }
        }
        console.log(j, min)
        if(j !== min){
            count++
            [arr[min], arr[j]] = [arr[j], arr[min]];
        }
        console.log(count)
    }
    return arr

}

// TEST
// console.log(selection([5,1,8,4,3]));

// console.log(selection([8,2,1,3,4,5,6,7]));




// INSERTION SORT
function insertion(arr) {
    for (var i = 1; i < arr.length; i++){
        var current = arr[i];
        //work backwards, start from last and move to index zero
        for(var j = i - 1; j >= 0 && arr[j] > current; j--){

               arr[j+1] = arr[j]; //move item forward

            console.log(arr[j] > current)
        }
        arr[j+1] = current; //insert item in front( j+1) because j moves down after loop is done 'j--')

        console.log(arr)
// return arr
    }
}


console.log(insertion([5,1,8,4,3]))