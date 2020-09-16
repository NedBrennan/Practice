// Practice and notes for recursion

/*
What can go wrong with recursion?
    Forgetting to return or calling same function
    console.log rather than return
        RETURN must be called
        Recursion is built on returning
    "Stack Overflow": recursion is not stopping
*/

// Helper method recursion
// A recursive function within another function


// SIMPLE RECURSION FUNCTIONS FOR PRACTICE
function power(base, exponent) {
    if(exponent === 0) return 1
    return base * power(base, exponent - 1)
}

function fibonacci(n) {
    if(n <= 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

function productOfArray(a) {
    if(a.length === 1) return a
    return a[a.length - 1] * productOfArray(a.slice(0, a.length - 1))
}

function recursiveRange(n) {
    if(n === 0) return 0
    return n + recursiveRange(n - 1)
}

function Factorial(num) {
    if(num === 1) return 1
    return num * Factorial(num - 1)
}


// MORE COMPLEX RECURSION FOR PRACTICE
function reverse(s) {
    if(s.length === 1) return s
    return s[s.length - 1] + reverse(s.slice(0, s.length - 1))
}

function isPalindrome(s) {
    if(s.length > 0) {
        if(s[0] === s[s.length - 1] && isPalindrome(s.slice(1, s.length - 1))) return true
        else return false
    } else return true
}

