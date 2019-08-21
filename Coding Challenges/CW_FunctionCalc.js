/*This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus,
 times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));*/




let n = '';
function zero(m) {
    let num = 0;
    if(m){
        n += num
        n += m;
    }else{
        return num;
    }


    console.log(eval(n));
    let result = eval(n)
    n = '';
    return Math.floor(result);
}


function one(m) {
    let num = 1

    if(m){
        n += num
        n += m;
    }else{
        return num;
    }

    console.log(eval(n));
    let result = eval(n)
    n = '';
    return Math.floor(result);
}

function two(m) {
    let num = 2;

    if(m){
        n += num
        n += m;
    }else{
        return num;
    }

    console.log(eval(n));
    let result = eval(n)
    n = '';
    return Math.floor(result);
}


function three(m) {
    let num = 3;

    if(m){
        n += num
        n += m;
    }else{
        return num;
    }

    console.log(eval(n));
    let result = eval(n)
    n = '';
    return Math.floor(result);
}

// function four(m) {
//     let num = 4
//
//     if(m){
//         n += num
//         n += m;
//     }else{
//         return num;
//     }
//
//     console.log(eval(n));
//     let result = eval(n)
//     n = '';
//     return Math.floor(result);
// }


function four(m) {
    let num = 4;
    //m: function(a) NOT plus()
    //when we pass num in m ( m(num))-- we pass it for a function inside of plus().

    return m ? m(num) : num;
}




function five(m) {
    let num = 5
    if(m){
        n += num
        n += m;
    }else{
        return num;
    }

    let result = eval(n)
    n = '';
    return Math.floor(result);

}

function six(m) {
    let num = 6;

    if(m){
        n += num
        n += m;
    }else{
        return num;
    }

    console.log(eval(n));
    let result = eval(n)
    n = '';
    return Math.floor(result);
}
function seven(m) {

    let num = 7;

    if(m){
        n += num
        n += m;
    }else{
        return num;
    }

    console.log(eval(n));
    let result = eval(n)
    n = '';
    return Math.floor(result);
}

function eight(m) {
    let num = 8;

    if(m){
        n += num
        n += m;
    }else{
        return num;
    }

    console.log(eval(n));
    let result = eval(n)
    n = '';
    return Math.floor(result);
}
// function nine(m) {
//     let num = 9;
//
//
//     if(m){
//         n += num
//         n += m;
//     }else{
//         return num;
//     }
//
//     console.log(eval(n));
//     let result = eval(n)
//     n = '';
//     return Math.floor(result);
// }


function nine(m) {
    let num = 9;

    return m ? m(num) : num;
}


// function plus(t) {return '+' + t}
function plus(b){

console.log(b)
     let m = function(a) {
        console.log(a);
        return a + b;
    }
    return m;
}
function minus(t) {return '-' + t}
function times(t) {return '*' + t}
function dividedBy(t) {return '/' + t}


// TEST
console.log(four(plus(nine())));