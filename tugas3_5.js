// START PALINDROME
function palindrome(str) {

    const x = str.length-1;

    if( x == 0 || str.length == 0){
        return "Ini Palindrome"
    }
    if(str[0] == str[x]){
        return palindrome(str.slice(1,x))
    }
    return "Data bukan palindrome";
}
    console.log(palindrome("malam")) 


// START REVERSE

const str = 'saya belajar javascript';

const words = str.split(' ');
console.log(words[2] , words[1] , words[0] );








