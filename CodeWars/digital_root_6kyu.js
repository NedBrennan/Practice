function digital_root(n) {
    
    array = Array.from(String(n), Number)
    newN = 0

    if(n.length !== 1) {
        for(i = 0; i < array.length; i ++) {
            newN += array[i]
        }
        if(Array.from(String(newN), Number).length > 1 ) return digital_root(newN)
        else return newN
    } else return array
  }