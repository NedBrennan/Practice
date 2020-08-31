var Year = {
    january: 31,
    february: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31
}

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
    var day = 0
    var currentMonth = 0
    
    for (var month in Year) {
        if (day <= 256) {
            day += Year[month] 
            currentMonth += 1
        }
    }

    currentMonth < 10 ? currentMonth = '0' + currentMonth : none

    return currentMonth + '.' + (day - 256) + '.' + year 

}