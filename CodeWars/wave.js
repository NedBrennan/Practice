function wave(str){
    arr = str.split('')
    waveArray = []
    for(i = 0; i < arr.length; i ++) {
        if(arr[i] !== ' ') {
            arr[i] = arr[i].toUpperCase()
            waveArray.push(arr.join(''))
            arr[i] = arr[i].toLowerCase()
        }
    }
    return waveArray
  }