
// const nama = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         const data = "javacript"

//         if(data.length < 3){
//             resolve("Data benar");
//         }else{
//             reject(new Error("Data salah"))
//         }
//     },1000)
// });
// nama
//     .then((ress)=>{
//         console.log(ress);
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })
//     .finally(()=>{
//         console.log("selesai")
//     })

const cek = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const data = ["saya","diki"];
        const cek = data.push("herliansyah")
        if(cek){
            resolve(data)
        }else{
            reject(new Error("Data tidak masuk"))
        }      
    },5000);
})
cek
    .then((ress)=>{
        console.log(ress)
    })
    .catch((err)=>{
        console.log(err.message);
    })
    .finally(()=>{
        console.log("selesai")
    })
