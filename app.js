const yargs = require('yargs');
const { simpanContact } = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan Kontak Baru',
    builder: {
        nama: {
            describe : "Nama kontak",
            demandOption: true,
            type: 'string'
        },
        no_hp: {
            describe : "Nomor kontak",
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {

        simpanContact(argv.nama, argv.no_hp);

        // const contact = {
        //     nama: argv.nama,
        //     no_hp: argv.no_hp
        // }

        // console.log(contact);
    }
    

});


yargs.parse();


