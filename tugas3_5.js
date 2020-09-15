function palindrome(str) {
    var x = str.length-1;
        
    if( x === 0 || str.length === 0){
        return "Ini Palindrome"
    }
    if(str[0] === str[x]){
        return palindrome(str.slice(1,x))
    }return "Data bukan palindrome";
}

    console.log(palindrome("malam")) // true
    