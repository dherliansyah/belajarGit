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

const cekbulan = (cek) => {
  if (Array.isArray(cek)) {
    cek.map((item) => {
      console.log(item);
    });
  } else {
    console.log(cek.message);
  }
};

getMonth(cekbulan);
