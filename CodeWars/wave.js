function wave(str){
    newStr = str
    for (i = 0; i < str.length; i ++) {
        if (str[i] === ' ') {continue}
        else {
            newStr[i] = newStr[i].toUpperCase()
            console.log(newStr)
        }
    }
  }