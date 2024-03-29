/*
* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*
* */


//SOLUTION
function humanReadable(seconds) {

    let HH = 0, MM = 0, SS = seconds;
    let humanT;

    while(SS > 59){
        SS = SS - 60
        MM++;

        if(MM > 59){
            MM = MM - 60;
            HH++;
        }
    }

    if((SS + '').length == 1){
        SS = '0'+ SS;
    }
    if((MM + '').length == 1){
        MM = '0'+ MM;
    }
    if((HH + '').length == 1){
        HH = '0'+ HH;
    }

    humanT = ( HH + ':' + MM + ':' + SS)
    return humanT
}


// Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
//     Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
//     Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
//     Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
//     Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');