const { argv } = require('./config/yargs.js');
const { getSpotData } = require('./spot/spot.js');
const { getClimaData } = require('./clima/clima.js');
console.log(argv.adress);
//
getSpotData(argv.adress)
    .then(resp => {
        //console.log(resp);
        return getClimaData(resp.lat, resp.lon)
    })
    .then(resp => {
        //console.log(resp);
        console.log(`The temperature in ${resp.name} is ${resp.main.temp}`);

    })
    .catch(err => {
        console.log(`no se pudo determinar el clima para ${argv.adress}`);

        console.log(err)
    });