function solomonsQuest(ar){

    // Solomon's initial location
    solomonLocation = [0, 0]
    // Initial time dilation
    currentTimeDilation = 0

    // Loop through all changes
    for(i = 0; i < ar.length; i ++) {
        //account for each change
        updateLocation(ar[i])
    }

    function updateLocation(arr) {

        // New time dilation
        timeDilation = arr[0] + currentTimeDilation
        // Get direction
        direction = arr[1]
        // Account for time dialation in distance measurement
        distance = (arr[2] * (2**timeDilation))

        // North (Positive Y axis)
        if(direction === 0) solomonLocation[1] += distance
        // East (Positive X axis)
        else if(direction === 1) solomonLocation[0] += distance
        // South (Negative Y axis)
        else if(direction === 2) solomonLocation[1] -= distance
        // West (Negative X axis) 
        else solomonLocation[0] -= distance

        // Update time dilation (Temporal zone)
        currentTimeDilation = timeDilation
    }

    // After everything has run
    // Update Solomon's location
    return solomonLocation
}