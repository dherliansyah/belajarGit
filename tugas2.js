const mtk = 60;
const bahasaIndonesia = 60;
const bahasaInggris = 69;
const ipa = 69;

const total = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4;
console.log(total);

const cek = (total) => {
    if(total >=90 && total <=100 ){
        return "GRADE = A";
    }else if(total >=80 && total <=89 ){
        return "GRADE = B";
    }else if(total >=70 && total <=79){
        return "GRADE = C";
    }else if(total >=60 && total <=69){
        return "GRADE = D";
    }else if(total >=0 && total <=59){
        return "GRADE = E";
    }else{
        return "Nilai Kamu Kosong";
    }
};

console.log(cek(total));