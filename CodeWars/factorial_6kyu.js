function choose(n, k) {
    function fact(j) {
    if(j > 1) {
        return j * fact(j - 1)
    } else if(j === 0) return 1
    else return j
    }
    return Math.round((fact(n)/(fact(k) * (fact(n - k)))))
}