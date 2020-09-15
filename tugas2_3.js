const data = (nilaiAwal,nilaiAkhir,dataArray) =>{
    if(nilaiAwal > nilaiAkhir ){
        return "Nilai akhir harus lebih besar dari nilai awal"
    }

    if(dataArray.length <= 5){
        return " Data array harus lebih dari 5"
    }else{
        const hasil = dataArray.filter(item => item > nilaiAwal && item < nilaiAkhir)
        return hasil.sort((x,y) => (x - y));
    }
}
console.log(data(5, 20, [2, 25, 4, 14, 17, 30, 8]))