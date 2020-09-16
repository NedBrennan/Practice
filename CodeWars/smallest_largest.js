var arr = [7, 5, 3, 4, 21, 36, 10, 28, 35, 5, 24, 42]

function breakingRecords(a) {

    smallest = 0
    largest = 0
    largeCount = 0
    smallCount = 0

    for (score = 0; score < a.length; score++) {
        if (score === 0) {
            smallest = a[score]
            largest = a[score]
        } else if(a[score] > largest) {
            largeCount += 1
            largest = a[score]
        } else if (a[score] < smallest) {
            smallCount += 1
            smallest = a[score]
        }

    }

    console.log(largeCount + ' ' + smallCount)
}