const five = require('johnny-five');
const board = new five.Board();

const array = []

updateArray = (input) => {
    array.push(input);
    console.log(array)
}


board.on("ready", function () {

    // Create a new `joystick` hardware instance.
    var joystick = new five.Joystick({
        //   [ x, y ]
        pins: ["A0", "A1"]
    });

    setTimeout(function () {
        joystick.removeListener('change', eventHandler);
    }, 5000);

    function eventHandler() {
        // console.log("Joystick");
        // console.log("  x : ", this.x);
        // console.log("  y : ", this.y);
        // console.log("--------------------------------------");
        // quadrant one x is postive and y is negative
        // quadrant two x is negative and y is negative
        // quadrant three x is negative and y is positive
        // quadrant four x is positive and y is positive
        if (this.x > 0 && this.y < 0) {
            const input = 1
            // console.log('quadrant:', input)
            updateArray(input)
        } else if (this.x < 0 && this.y < 0) {
            const input = 2
            updateArray(input)
        } else if (this.x < 0 && this.y > 0) {
            const input = 3
            updateArray(input)
        } else {
            const input = 4
            updateArray(input)
        }

    }

    joystick.on('change', eventHandler);



    // push to array every time a change event happens





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
