function advice(n) {

    var city = makeArray(n)



    console.log(city)

}

function makeArray(n) {
    city = []
    agents = [[0, 0], [1, 5], [5, 1]]
    for (i = 0; i < n; i++) {
        currentArray = []
        for (k = 0; k < n; k++) {
            currentArray.push(0)
        }
        city.push(currentArray)
    }

    city[
    console.log(city)
}

advice(5)

// Got stuck and or overwhelmed.. will come back