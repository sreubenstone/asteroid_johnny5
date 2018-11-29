
// spits out a number between 0 and 9
const executeHoroscope = (input, asteroids) => {

    // get asteroid

    const asteroid = input[2] * 2
    const i = asteroids[asteroid]


    const diamater = i.estimated_diameter.meters.estimated_diameter_max
    const diameter_string = diamater.toString()
    const lastchar_diamater = diameter_string[diameter_string - 1];



    const velocity = i.close_approach_data[0].relative_velocity.miles_per_hour
    const velocity_string = velocity.toString()
    const lastchar_velocity = velocity_string[velocity_string - 1];



    const lunar = i.close_approach_data[0].miss_distance.lunar
    const lunar_string = lunar.toString()
    const lastchar_lunar = lunar_string[lunar_string - 1];





}

module.exports = executeHoroscope

/*

-- Get closest object to Earth at time of test (Random out of 8 returned)
Size of Asteroid
Velocity of Asteroid
Miss Distnace (Earth)
Miss Distance (Moon)




INPUT

-- Store an array for each quadrant every 1/2 second for 10 seconds [1, 1, 3, 4, 2 1]
-- 


*/