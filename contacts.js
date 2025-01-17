
const fs = require('fs');
const path = require('path');
// const readline = require('readline');


// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


const dirPath = './data';
const dataPath = './data/contacts.json';

if(!fs.existsSync(dirPath)){

    fs.mkdirSync(dirPath)
}


if(!fs.existsSync(dataPath)){

    fs.writeFileSync(dataPath , JSON.stringify([]) , 'utf-8');
}


// rl.question('Masukan nama Anda:' , (name) => {

//     console.log(`Halo ${name}!`);
// })

const tulisPertanyaan = (pertanyaan) =>   {

    return new Promise((resolve, reject) => {

        rl.question(pertanyaan , (name) => {
            resolve(name);
        });
    });
}

const loadContact = () => {

    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');

    const contacts = JSON.parse(fileBuffer);

    return contacts;

}


const simpanContact = (nama, hp) => {

    const contact = {nama, hp};

    // const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');

    // const contacts = JSON.parse(fileBuffer);

    const contacts = loadContact();


    const duplikat = contacts.find(contact => contact.nama === nama);

    if(duplikat){

        console.log('Nama sudah ada!');

        return false;
    }

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2), 'utf-8' );

    // console.log(contacts);

}

const listContact = () => {

    const contacts = loadContact();

    console.log("Daftar Kontak : ");

    contacts.forEach( (contact , i) => {

        // console.log( i + 1 + '. ' + contact.nama + ' : ' + contact.hp);
        console.log(`${i + 1}. ${contact.nama} : ${contact.hp}`);
    });     

    // console.table(contacts);

}

const showContact = (nama) => {

    const contacts = loadContact();

    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

    if(!contact){
        console.log('Kontak tidak ditemukan!');
        return false;
    }

    console.log(contact);

}
const hapusContact = (nama) => {

    const contacts = loadContact();

    const newContact = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContact, null, 2), 'utf-8' );

    if( contacts.lenght === newContact.lenght ){

        console.log('Kontak tidak ditemukan!');

        return false;

    }

    console.log('Kontak berhasil dihapus!');
    // console.log(contact);

}




module.exports = {
    tulisPertanyaan,
    simpanContact,
    listContact,
    showContact,
    hapusContact
}