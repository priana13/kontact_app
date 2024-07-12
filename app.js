const yargs = require('yargs');
const { simpanContact , listContact } = require('./contacts');

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
    

}).demandCommand();

// menampilkan daftar semua kontak

yargs.command({
    command : 'list',
    describe : 'Menampilkan daftar kontak',
    handler() {
        // console.log('Menampilkan daftar kontak');

        listContact();
    }
})

yargs.parse();


