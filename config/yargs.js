const argv = require('yargs')
    .options({
        adress: {
            alias: 'a',
            demand: true,
            desc: 'Adress to obtain clima raport'
        }
    })
    .help()
    .argv;

module.exports = { argv };