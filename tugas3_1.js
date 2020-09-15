const cekHariKerja = (day) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const dataDay = ["senin","selasa","rabu","kamis","jumat"]
            let cek = dataDay.find((item)=>{
                return item == day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error("Hari ini bukan hari kerja"))
            }
        },3000)
    })
}

// START THEN CATCH
// cekHariKerja('sabtu')
//     .then((ress)=>{
//         console.log("Hari kerja")
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })
//     .finally(()=>{
//         console.log("selesai")
//     });

    // .then : Apabila janji terpenuhi / data benar maka data tampil
    // .catch : Apabila janji tidak terpenuhi / data kurang tepat 
// END THEN CATCH

// START TRY CATCH
const cekhari = async (day) =>{
    try{
        let result = await cekHariKerja(day);
        console.log(`${result} ini hari kerja`)
        // console.log(result);
    }catch(error){
            console.log(error.message);

    }finally{
        console.log("selesai")
    }
}
cekhari('minggu')
    // .try : Apabila janji terpenuhi / data benar maka dia akan menyimpan seluruh data tampil
    // .catch : Apabila janji tidak terpenuhi / data kurang tepat
// END TRY CATCH



