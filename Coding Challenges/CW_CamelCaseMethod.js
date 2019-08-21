//
// Write simple .camelCase method (camel_case function in PHP,
// CamelCase in C# or camelCase in Java) for strings. All words
// must have their first letter capitalized without spaces.
//
//     For instance:
//     "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord




// SOLUTION
String.prototype.camelCase=function(){
    //your code here


    let result = '';// where we add Camel case letters
    let i = 0;
    let str = this //respresents the input

//   if input is empty then return empty string
    if(str.length === 0){
        return result
    }

    while(i < str.length){
// check if the first index is not an empty string
        if(str[i] !== ' '){

//short way
            result += i === 0 || str[i - 1] == ' ' ? str[i].toUpperCase() : str[i];

// long way
//    if(i === 0 || str[i - 1] == ' '){
//       result += str[i].toUpperCase();
//   //check if whatever did not pass the prior conditions is not a empty
//     }else {
//      result += str[i]
//      }
        }
        i++
    }
    return result;
}