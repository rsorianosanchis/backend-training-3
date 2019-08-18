const { argv } = require('./config/yargs.js');
const { getSpotData } = require('./spot/spot.js');
const { getClimaData } = require('./clima/clima.js');
console.log(argv.adress);
//
getSpotData(argv.adress)
    .then(resp => {
        console.log(resp);
        return getClimaData(resp.lat, resp.lon)
    })
    .then(resp => {
        console.log(resp);
    })
    .catch(err => { console.log(err) });