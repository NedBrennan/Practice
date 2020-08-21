var test1 = 89
var test2 = 92

function digPow(n, p) {
    // create an array of all digits of n
    var nArray = Array.from(n.toString()).map(Number)
    power = p
    sum = 0
    k = 0
    
    // Iterates over items in nArray and raises them
    // to succesivly larger powers
    for (i = 0; i < nArray.length; i ++) {
        nArray[i] = Math.pow(nArray[i], power)
        sum = sum + nArray[i]
        power += 1
        }

    // Checks for values of k to satisfy parameters
    while (sum <= n) {
        if (sum * k < n) {k = k + 1}
        else if (sum * k == n) {
            console.log("Yes " + k)
            break
        }
        else if (sum * k > n) {
            console.log("No match found") 
            break}
    }
}

digPow(test1, 1)
digPow(test2, 2)