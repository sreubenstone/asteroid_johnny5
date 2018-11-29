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



        const keyArray = Object.keys(asteroidsData.data.near_earth_objects)
        const key1 = keyArray[0]
        const asteroids = asteroidsData.data.near_earth_objects[key1]
        // console.log('asteroid:', asteroids[3])
        // console.log('diamater in meters:', asteroids[3].estimated_diameter.meters.estimated_diameter_max)
        // console.log('velocity in mph:', asteroids[3].close_approach_data[0].relative_velocity.miles_per_hour)




    }
    catch (err) {
        console.error(err)
    }


    // const h = executeHoroscope(input, asteroids)
    // const userHoroscope = horoscope[h]
}




getAsteroids()





