const five = require('johnny-five');
const board = new five.Board();

board.on("ready", function () {

    // Create a new `joystick` hardware instance.
    var joystick = new five.Joystick({
        //   [ x, y ]
        pins: ["A0", "A1"]
    });

  

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
            console.log('quadrant:', input)
            
        } else if (this.x < 0 && this.y < 0) {
            const input = 2
            console.log('quadrant:', input)
            
        } else if (this.x < 0 && this.y > 0) {
            const input = 3
            console.log('quadrant:', input)
           
        } else {
            const input = 4
            console.log('quadrant:', input)
            
        }

    }

    joystick.on('change', eventHandler);



    // push to array every time a change event happens





});
