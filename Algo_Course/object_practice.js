/* arr1 = [3, 4, 1, 2, 2, 3]
arr2 = [16, 9, 1, 4, 4, 9]

function findSquare(arr1, arr2) {

    if(arr1.length !== arr2.length) {
        return false
    }

    let baseValues = {}
    let squareValues = {}
    for(let val of arr1){
        baseValues[val] = (baseValues[val] || 0) + 1
    }
    for(let val of arr2){
        squareValues[val] = (squareValues[val] || 0) + 1
    }
    for(let key in baseValues) {
        if(!(key ** 2 in squareValues)){
            return false
        }
        if(squareValues[key ** 2] !== baseValues[key]) {
            return false
        }
    }
    return true
}

findSquare(arr1, arr2)
*/

test1 = 'anagramr'
test2 = 'nagarams'

function Anagram(string1, string2) {
    
    let first = {}
    let second = {}

    for(let letter of string1) {
        first[letter] = (first[letter] || 0) + 1
    }
    for(let letter of string2) {
        second[letter] = (second[letter] || 0) + 1
    }
    for(let key in first) {
        if(!(key in second)) {
            return false
        }
        if(first[key] !== second[key]) {
            return false
        }
    }
    return true
}