const axios = require('axios');


const getClimaData = async(lat, lon) => {
    //
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=91afaeda6f7aab3ca545ab7d9e97a82a&units=metric`);
    // console.log(response);

    return response.data

}

module.exports = { getClimaData };