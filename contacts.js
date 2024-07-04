
const fs = require('fs');
const path = require('path');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


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


const simpanContact = (nama, hp) => {

    const contact = {nama, hp};

    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');

    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2), 'utf-8' );

    // console.log(contacts);

}

module.exports = {
    tulisPertanyaan,
    simpanContact
}