var name = ["Abigail","Alexandra","Alison","Amanda","Angela","Bella","Carol","Caroline","Carolyn","Deirdre",
    "Diana","Elizabeth","Ella","Faith","Olivia","Penelope"];

let ngepush = (nama, callback)=>{
    
    let iniData = callback(nama)

    console.log(name);
}
let tambahNama = (nama) =>{
    return name.push(nama)
}

ngepush("diki", tambahNama);