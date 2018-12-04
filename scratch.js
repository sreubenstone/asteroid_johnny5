const five = require('johnny-five');
const raspi = require('raspi-io');

const board = new five.Board({
    io: new raspi(),
});




/*
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

*/


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
