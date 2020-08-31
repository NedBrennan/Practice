multiplicationTable = function(size) {
    table = []
    newTable = []
    tableArray = []

    for (i = 0; i < size; i ++) {
        table[i] = i + 1
    }

    counter = 0

    for (k = 0; k < size; k ++) {
        for (j = 0; j < size; j++) {
            newTable[j] = table[j] * (k + 1)
        }

        // Had a big problem here
        // For some reason - which I later identified
        // the tableArray was returning with all arrays
        // set equal to the last value of newTable
        // This was a problem with the reference value
        // the values of newTable were not being coded into
        // tableArray, only the REFERENCE to the newTable array

        // This is a sloppy solution and I should find a different
        // solution without the need for it the slice function
        tableArray[k] = newTable.slice(0, size)
    }

    return tableArray
}

multiplicationTable(4)