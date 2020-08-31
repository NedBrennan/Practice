function SumConsec(arr) {
    currentChar = 0
    charSum = []

    for (i = 0; i < arr.length; i ++) {
        if (i === 0) {
            currentChar = arr[i]
            charSum.push(arr[i])
        } else if (arr[i] === currentChar) {
            charSum[charSum.length - 1] = charSum[charSum.length - 1] + currentChar
        } else {
            currentChar = arr[i]
            charSum.push(arr[i])
        }
    }

    return charSum
}

var testArray = [0, 5, 5, 5, 7, 3]

SumConsec(testArray)