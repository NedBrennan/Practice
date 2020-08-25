function findShort(s) {
    counter = 0
    short = 0
    len = s.length

    for (i = 0; i < len; i++) {
        if (s[i] !== ' ') {
            counter += 1
        }
        else {
            if (short != 0 && short < counter) {
                counter = 0
            } else {
                short = counter
                counter = 0
            }
        }
    }   

    if (counter != 0 && counter < short) {
        return counter
    } else return short
}
