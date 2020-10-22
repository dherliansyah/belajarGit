// START PALINDROME
// function palindrome(cek) {
//     if(typeof cek == 'string'){
//     const x = cek.length-1;

//     if( x == 0 || cek.length == 0){
//         return "Ini Palindrome"
//     }
//     if(cek[0] == cek[x]){
//         return palindrome(cek.slice(1,x))
//     }
//     return "Data bukan palindrome";
// }else{
//     return "Data harus string"
// }
    
// }
//     console.log(palindrome("malam"));
//     console.log(palindrome(1233223)); 


// START REVERSE

// const str = 'saya belajar javascript' ;
//     if(typeof str !== 'string'){
//         console.log("data harus string / data tidak boleh kosong")
//     }else{
// const words = str.split(' ');
// console.log(words[2] , words[1] , words[0] );
//     }

    const  data = (cek) =>{
        if(typeof cek !== 'string'){
            console.log("data harus string / data tidak boleh kosong")
         }

         const aa = cek.toLowerCase().split(' ').reverse('').join(' ');
         console.log(aa);
    }
    data("SAYA BELAJAR JAVASCRIPT")









