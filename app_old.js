const yargs = require('yargs')

//mengambil argumen dari command line
// console.log(process.argv[2]);
// const command = process.argv[2];

// if(command === 'add'){
//     console.log('Menambahkan contact');
// }else if(command === 'remove'){
//     console.log('Menghapus contact');
// }else if(command === 'list'){
//     console.log('Menampilkan daftar contact')

console.log(yargs.argv)


// const contacts = require('./contacts')


// const main = async() => {
    
//     const nama = await contacts.tulisPertanyaan("Masukan nama Anda: ");
//     const hp = await contacts.tulisPertanyaan("Masukan no HP Anda: ");

//     contacts.simpanContact(nama, hp);

// }


// main();
