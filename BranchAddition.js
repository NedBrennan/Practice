function Adder(rows) {
    baseArray = [1]
    counter = 1
    sum = 0
    rowComp = rows - 1

    for (i = 1; i <= rowComp; i++) {
        newArray = []
        for (j = 0; j <= baseArray.length - 1; j++) {
            if (j == 0) {
                newArray[j] = baseArray[j] + (counter * 2)
                newArray.push(baseArray[j] + ((counter * 2) + 2))
            }
            else if (j > 0) {
                newArray.push(baseArray[j] + ((counter * 2) + 2))
            }
        }
        counter ++
        baseArray = newArray
        newArray = []
    }

    for (i = 0; i < baseArray.length; i ++) {
        sum = sum + baseArray[i]
    }
    return sum
}

Adder(2)