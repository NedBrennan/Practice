function digPow(n, p) {
    // create an array of all digits of n
    var nArray = Array.from(n.toString()).map(Number)
    power = p
    num = n
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
    if (sum > num) {
        while (sum >= num + 1) {
            if (num * k < sum) {
                k = k + 1
            }
            else if (num * k == sum) {
                return k
            }
            else if (num * k > sum) {
                return -1
                break
            } 
        }
    }
    else if (sum < num) {
        while (sum <= num + 1) {
            if (num * k < sum) {
                k = k + 1
            }
            else if (num * k == sum) {
                return k
            }
            else if (num * k > sum) {
                return -1
            }
        }
    }
    else return 1
}