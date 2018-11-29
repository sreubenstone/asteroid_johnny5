const axios = require('axios');
const horoscopes = require('./horoscopes');

// should be able to complete all the way down to horoscope and sms

const input = [1, 1, 3, 4, 2, 1, 1, 3, 4, 2]

getAsteroids = async () => {
    try {
        const asteroidsData = await axios({
            method: 'get',
            url: 'https://api.nasa.gov/neo/rest/v1/feed/today?detailed=false&api_key=DEMO_KEY',

        })

    }
    catch (err) {
        console.error(err)
    }

    const asteroids = asteroidsData.data.near_earth_objects
    executeHoroscope(input, asteroids)
}




getAsteroids()

const userHoroscope = horoscope[h]

console.log(userHoroscope)

