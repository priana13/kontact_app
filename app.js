const contacts = require('./contacts')


const main = async() => {
    
    const nama = await contacts.tulisPertanyaan("Masukan nama Anda: ");
    const hp = await contacts.tulisPertanyaan("Masukan no HP Anda: ");

    contacts.simpanContact(nama, hp);

}


main();
