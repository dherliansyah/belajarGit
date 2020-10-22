const data = (angka) => {
    if (typeof angka !== "string" && angka !== undefined) {

      let cekString = angka.toString().split("0")
      let hasil =[]
      for(i=0; i<= cekString.length-1; i++){
        let c =cekString[i]
        let d = c.split("").sort()

        hasil.push(d)
      }
      
      // let alhasil = hasil.map((item)=> item).sort((a,b) => a-b)
      let cek = hasil.join(" ");
      let cekRep = cek.replace(/\,/g, "");
      // let cobaHasil= cek.sort((a,b) => a-b)
      

      console.log(parseInt(cekRep));
    } else {
      console.log("Data harus number / Data tidak boleh kosong");
    }
  };
  data("aa");
  