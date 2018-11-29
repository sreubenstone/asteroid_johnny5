
// spits out a number between 0 and 9
const executeHoroscope = (input, asteroids) => {


    // get asteroid

    const asteroid = input[2] * 2

    // do something with size of asteroid

    const i = asteroids[asteroid]
    const diamater = i.estimated_diameter.meters.estimated_diameter_max
    // last number of diameter



    // do something with velocity of asteroid
    const velocity = i.close_approach_data[0].relative_velocity.miles_per_hour
    // last number of velocity





    // do something with miss distance moon

    const lunar = i.close_approach_data[0].miss_distance.lunar

    // first number of lunar





}

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