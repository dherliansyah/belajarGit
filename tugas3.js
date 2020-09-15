let nilai = ""
let cek = 1

for(printSegitiga=5; printSegitiga>0; printSegitiga--){
  for(y=0; y<printSegitiga; y++){
    nilai += cek;
    cek++
  }
  nilai += "\n";
  cek =1
}
console.log(nilai)