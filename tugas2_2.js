const name = ["diki","nisa","elza"]

const data = (nama,callback)=>{
    // const hasil = `Hallo ${name}`;
    callback(nama);
    console.log(`Hallo ${name}`);

}

const proses = (nama)=>{
    const nilai = name.push(nama)
}

data("zahra", proses);