const axios = require('axios');
const horoscopes = require('./horoscopes');
const executeHoroscope = require('./algo')
const accountSid = 'AC4f4a47682dd13eee8b49aa22c3538fe4';
const authToken = 'bfc9ff64caca3c90a9e58b786316e5c8';
const client = require('twilio')(accountSid, authToken);
const five = require('johnny-five');
const raspi = require('raspi-io');

const board = new five.Board({
    io: new raspi(),
});

board.on("ready", function () {

    // Create a new `joystick` hardware instance.
    var joystick = new five.Joystick({
        //   [ x, y ]
        pins: ["A0", "A1"]
    });

    joystick.on("change", function () {
        console.log("Joystick");
        console.log("  x : ", this.x);
        console.log("  y : ", this.y);
        console.log("--------------------------------------");
    });
});




/* Autoboot Server (Npm run dev this directory on pi start)

LCD: "Press red button to begin"...user presses button

Program runs and collects input on 1 second interval for 10 seconds

LCD should show somefeedback of the joy stick

Input is saved...



Move stick for 7 seconds

Stores data

Displays fortune

Asks for phone number

Sends fortune  
https://www.crowdsupply.com/arsenijs/zerophone

STEP 1

Node Server
    Receive data
        Movement Information
        Sender Information

                            Process Data
                                    Asteroid https://api.nasa.gov/api.html#neows-swagger
                                    
            

Output data
    Response


*/

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
        client.messages
            .create({
                body: `${horoscope}`,
                from: '+19292425545',
                statusCallback: 'http://postb.in/1234abcd',
                to: '+15164265510'
            })
            .then(message => console.log(message.sid))
            .done();


        // Display the horoscope on Pi <client>



    }
    catch (err) {
        console.error(err)
    }



    // const userHoroscope = horoscope[h]
}




getAsteroids()









