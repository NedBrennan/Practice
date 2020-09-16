function dup(array){
    j = 0   
    
    for(i in array) {
        if(array[i] !== array[j]) {
            j ++
            array[j] = array[i]
        }
    }
console.log(j + 1)
}

countUniqueValues([1, 1, 1, 1, 2, 3, 5, 5, 5, 5, 8, 9])
