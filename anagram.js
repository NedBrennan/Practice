// Find anagrams of specified word in given array

function findAnagrams(ofThisWord, thisArray) {
    len = thisArray.length
    anagram = ofThisWord
    anas = []

    for (i = 0; i < len; i++) {
        // creates alphabetical representation of given string
        // check if our string and this string match
        if (anagram.split('').sort().join('') === thisArray[i].split('').sort().join('')) {
            // If so push to an array in unsorted form 
            anas.push(thisArray[i])
        } // if not i++ (do nothing)
    }
    // Return any anagrams found
    return anas
}   