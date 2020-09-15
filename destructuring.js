const student = {
    firstname: 'Diki',
    lastname: 'Herliansyah',
    nomor: 5
}

const {firstname,lastname,nomor} = student

// console.log(student)

const datadiri =   (student) =>{
    const {
        firstname,
        lastname,
        nomor
    } = student

    console.log(student.firstname);
    console.log(student.lastname);
}

datadiri(student)

// destructuring array
const rgb = [255, 279, 250];

console.log(rgb[1]);
const [red, green, blue] = rgb
console.log(rgb);
