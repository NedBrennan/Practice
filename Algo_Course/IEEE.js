var IEEE = {
    sign: 0,
    exp: 0,
    fraction: 0
}

function Num(n) {
    if (n === 0) return null
    else {
        n > 0 ? IEEE.sign = 0: IEEE.sign = 1
    }
}

function Reducer(number) {

    finalBinary = ''
    bs = ''
    currentNum = number

    while (currentNum != 0) {
        // Check remainder: if even if even add 0 to bs else add 1
        currentNum % 2 != 0 ? bs = bs + '1' : bs = bs + '0'
        // Change current num to num / 2 rounded down
        currentNum = Math.floor(currentNum / 2)
    }
    // reverse binary
    for (i = bs.length - 1; i >= 0; i --) {
        finalBinary += bs[i]
    }

    console.log(finalBinary)

}

function Splitter(floating) {
    intNum = 0
    decNum = 0

    res = toString(floating)
    spl = res.split('.')

    console.log(spl)
}

Splitter(67.8)