const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December",];
    if (!error) {
      callback(month);
    } else {
      callback(new Error("Sorry Data Not Found", []));
    }
  }, 4000);
};

const tampilBulan = (bulan) => {
  if (Array.isArray(bulan)) {
    bulan.map((element) => {
      console.log(element);
    });
  } else {
    console.log(bulan.message);
  }
};

getMonth(tampilBulan);
