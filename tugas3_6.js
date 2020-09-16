const data = (angka) => {
  if (typeof angka !== "string" && angka !== null) {
    let cekString = angka.toString();
    let cekSplit = cekString.split("0");
    let cekMap = cekSplit.map((item) => [...item].sort((a, b) => a - b));
    let cekJoin = cekMap.join("");
    let cekRep = cekJoin.replace(/\,/g, "");
    console.log(parseInt(cekRep));
  } else {
    console.log("Data harus number / Data tidak boleh kosong");
  }
};
data(5956560159466056);
