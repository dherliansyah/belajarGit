const data = [1,"Diki Herliansyah","dherliansyah","dikiherliansyahh@gmail.com"];
const address = ["jl. mekar sari rt06 rw03","36","Bekasi","17112"];
const biodata = [...data,...address,082114314831,"https://github.com/dherliansyah/"];
console.log(biodata);

const [street,,city] = address;
console.log(street,city);