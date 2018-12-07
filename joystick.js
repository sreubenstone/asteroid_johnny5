const five = require('johnny-five');
const board = new five.Board();
const getAsteroids = require('./app')

const array = []

updateArray = (input) => {
    array.push(input);
}


board.on("ready", function () {
	
	
	const button = new five.Button({
	pin: 7,
	invert: true, 
	holdtime: 2000
	});
	
	function buttonHandle1() {
		console.log('button was pressed dog');
		button.removeListener('hold', buttonHandle1)
		
		// Create a new `joystick` hardware instance.
		const joystick = new five.Joystick({
			//   [ x, y ]
			pins: ["A0", "A1"]
		});
		
		setTimeout(function () {
        joystick.removeListener('change', eventHandler);
		}, 5000);
    
     setTimeout(function () {
        getAsteroids(array);
    }, 15000);

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
	}
	
	// end button callback
	
	button.on("hold", buttonHandle1)
	
	});


