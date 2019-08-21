/*
* Write an algorithm that will identify valid IPv4 addresses in
* dot-decimal format. IPs should be considered valid if they consist
* of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Examples

Valid inputs:

1.2.3.4
123.45.67.89
Invalid inputs:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note that leading zeros (e.g. 01.02.03.04) are considered invalid.
* */




//SOLUTION
function isValidIP(str) {
    let count = 4;

    let i = 0;


    str = str.split('.');
//  console.log(str);
//  console.log(str.length)

    if(str.length != 4 ) return false
//   let countL = str[1].length * 3;

    console.log(str);
    let num = 0;

    while(i < str.length){


        num += parseInt(str[i])
        console.log(num)
        console.log(count)
        console.log(num.toString().length, str[i].length)
        if(num >= 0 && num <= 255 && num.toString().length == str[i].length) {

            count--;

        }
        num = 0;
        i++

    }
    console.log(count)
    if(count === 0){
        return true
    }


    return false
}





//TEST
isValidIP("0.0.0.0")  //true);
isValidIP("12.255.56.1")  //true);
isValidIP("137.255.156.100")  //true);

isValidIP('')  //false);
isValidIP('abc.def.ghi.jkl')  //false);
isValidIP('123.456.789.0')  //false);
isValidIP('12.34.56')  //false);
isValidIP('01.02.03.04')  //false);
isValidIP('256.1.2.3')  //false);
isValidIP('1.2.3.4.5')  //false);
isValidIP('123,45,67,89')  //false);
isValidIP('1e0.1e1.1e2.2e2')  //false);
isValidIP(' 1.2.3.4')  //false);
isValidIP('1.2.3.4 ')  //false);
isValidIP('12.34.56.-7')  //false);
isValidIP('1.2.3.4\n')  //false);
isValidIP('\n1.2.3.4')  //false);
