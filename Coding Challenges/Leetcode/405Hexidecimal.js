var toHex = function(num) {

    let lib = '0123456789abcdef';
    let result;
    // console.log(lib[lib.length - 1])

    function helper(input){
        if (input < 1 ) {

            return lib[lib.length - (input + 1)];
        }
        console.log(helper(Math.floor(input / 16)) + lib[lib.length - (input % 16)-1]);
        return helper(Math.floor(input / 16)) + lib[lib.length - (input % 16)-1]

    }


    if(num < 0){

        // let result = '';
        if(num === -1){
           return 'ffffffff'

        }else{
            num = -num - 1;
        }


        if (num < 0 ) {
            return lib[lib.length - num] ;
        }

        // helper(num)

        let str = '';
        let i = 0;
        let numLen = helper(num).length ;


        // while(i < (8 - numLen)){
        //     if(8 - numLen === 0){
        //         return str
        //     }
        //     str+="f"
        //     i++;
        // }

        return helper(num)


    }else if (num < 16 ) {
        return lib[num];
    }

    //       call this function til its<16   |||  when its return with lib[n] add it to lib[n % 16]
    return toHex(Math.floor(num / 16)) +  lib[num % 16];
};



console.log(toHex(-2147483648));