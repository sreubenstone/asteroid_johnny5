const axios = require('axios');
const horoscopes = require('./horoscopes');
const executeHoroscope = require('./algo')
const accountSid = 'AC4f4a47682dd13eee8b49aa22c3538fe4';
const authToken = 'bfc9ff64caca3c90a9e58b786316e5c8';
const client = require('twilio')(accountSid, authToken);


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
        // console.log('lunar miss distance:', asteroids[3].close_approach_data[0].miss_distance.lunar)

        const h = executeHoroscope(input, asteroids)
        console.log('horoscope h:', h)
        const horoscope = horoscopes[h].body
        console.log(horoscope)

        // SMS the horoscope
        /*
        client.messages
            .create({
                body: `${horoscope}`,
                from: '+19292425545',
                statusCallback: 'http://postb.in/1234abcd',
                to: '+15164265510'
            })
            .then(message => console.log(message.sid))
            .done();
		*/

        // Display the horoscope on Pi <client>



    }
    catch (err) {
        console.error(err)
    }




    // const userHoroscope = horoscope[h]
}




getAsteroids()









