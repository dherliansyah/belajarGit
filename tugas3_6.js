const data = (angka) => {
  if (typeof angka =='number' || typeof angka == 'string') {
    
    let cekString = angka.toString().split("0")
    let cekMap = cekString.map((item) => [...item].sort((a, b) => a - b));
    let cekJoin = cekMap.join("");
    let cekRep = cekJoin.replace(/\,/g, "");
    console.log(parseInt(cekRep));
  } else {
    console.log("Data harus number / Data tidak boleh kosong");
  }
};
data(5956560159466056);
