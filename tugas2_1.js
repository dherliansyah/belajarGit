
// 1. START JOIN
    const dataJoin = ["a","b","c","d","e"];
        console.log(dataJoin.join("|"));
// Method ini berfungsi untuk membuat array tersebut menjadi string dengan menyisipkan 
// karakter di setiap value array tersebut sesuai yang kita berikan di argument nya
// END JOIN 


// 2. START SORT
    const dataSort = ["d","g","f","z","a"];
        dataSort.sort();
        console.log(dataSort);
// Metode ini berfungsi untuk mengurutkan elemen pada array baik secara ascending atau descending.
// END SORT

// 3. START FILTER
    const dataFILTER = [1,2,3,4,5];
    const angka2 = dataFILTER.filter(function(x){
        return x > 2
    });
    console.log(angka2);
// untuk mencari nilai pada array lalu mengembalikannya dalam bentuk array
// END FILTER

// 4. START PUSH
    const dataPush = [1,2,3,4];
        dataPush.push(5);
        console.log(dataPush);
// Method push() akan menambahkan elemen array pada akhir dari array
// END PUSH

// 5. START POP
    const dataPOP = [10,20,30,40,50];
        dataPOP.pop();
    console.log(dataPOP);
//untuk menghapus value dari array di index terakhir
// END POP

// 6. START SPLICE
    const dataSPLICE = [10,20,30,40,50];
        dataSPLICE.splice(3);
        console.log(dataSPLICE);
// method splice() akan berfungsi ’menghapus’ array asal mulai dari index yang diberikan
// END SPLICE

// 7. START REVERSE
    const dataReverse = [10,20,30,40,50];
        dataReverse.reverse();
        console.log(dataReverse);
// digunakan untuk membalikkan urutan dari elemen di dalam array
// END REVERSE

// 8. START SLICE
    const dataSLICE = [10,20,30,40,50]
    const datas = dataSLICE.slice(2);
        console.log(datas);
// digunakan untuk ’memotong’ array menjadi array baru
// END SLICE

// 9. START SHIFT
    const dataSHIFT = [10,20,30,40,50];
        dataSHIFT.shift();
        console.log(dataSHIFT);
// shift akan atau menghapus elemen array di awal array
// END SHIFT

// 10. START UNSHIFT
    const dataUNSHIFT = [10,20,30,40,50];
        dataUNSHIFT.unshift(5);
        console.log(dataUNSHIFT);
// Method unshift() akan menambahkan elemen baru diawal array
// END UNSHIFT



