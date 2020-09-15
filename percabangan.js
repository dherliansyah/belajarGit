const saya = "anjas";
const sekolah = "sma";

// if-else
if (saya == "irvan" || sekolah == "smk") {
  console.log("benar");
} else {
  console.log("salah");
}

// Switch Case
switch (saya) {
  case saya == "irvan":
    console.log("benar");
    break;
  case "anjas":
    console.log("benar");
    break;

  default:
    console.log("bukan kedua-duanya");
    break;
}

//Ternary Operator
// console.log(
//   saya == "irvan" ? "benar"
//     : saya == "anjas"
//     ? (console.log("salah"),
//       console.log("salah"),
//       console.log("salah"),
//       console.log("salah"))
//     : "salah"
// );
// console.log(saya == "irvan" ? "benar" : saya == "ajas" ? "benar" : "salah");
