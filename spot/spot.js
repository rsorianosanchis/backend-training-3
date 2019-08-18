const axios = require('axios');


let getSpotData = async(spot) => {
    let encodedUrl = encodeURI(spot);
    //
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'b14ec798c5mshbc12ccec653e453p1a880ajsnf811dbbc5391' }
    });
    //
    const response = await instance.get();
    if (response.data.Results.length === 0) {
        throw new Error(`There is not a place for ${spot}`)
    }
    const data = response.data.Results[0];
    return {
        address: data.name,
        lat: data.lat,
        lon: data.lon
    }
}


module.exports = { getSpotData }