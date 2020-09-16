/*
Linear Search
    Accepts an arrau and a value
    Loop through the array and check if equal to value
    If it is return the current index
    If the value is never found return negative one
*/

function linearSearch(arr, val) {
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] === val) {
            return i
        } else if(arr[i] !== val && i === arr.length - 1) {
            return -1
        }
    }
}

/*
Binary Search
    Rather than eliminating one elemnt at a time
        Binary Search can eliminate half of the array
    Only works on sorted arrays

    DIVIDE AND CONQUER
    Call left and right
        pick somewhere in the middle
        greater than or less than?
        rinse repeat until middle equals value
*/

// My first attempt at binary search
// PROBLEM only true false solution
function binarySearch(arr, val) {
    left = 0
    right = arr.length
    middle = Math.floor((right - left) / 2)

    if(val < arr[left] || val > arr[right - 1]) return - 1
    
    if(arr[middle] === val) return true
    else if(val > arr[middle]) {
        left = middle
        return binarySearch(arr.slice(middle, arr.length), val)
    } else if(val < arr[middle]) {
        right = middle
        return binarySearch(arr.slice(left, middle), val)
    }
}


function binarySearchTwo(arr, elem) {
    var start = 0
    var end = arr.length - 1
    var middle = Math.floor((start + end) / 2)

    while(arr[middle] !== elem && start <= end) {
        if(elem < arr.middle - 1) end = middle - 1
        else start = middle + 1
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === elem ? middle: - 1
}

// STRING SEARCH ALGORITHMS

// Naive String Search

// KNP being reworked -- Need to come back

