function longestRepetition(s) {
    if(s === "") return ["",0]
    currentCount = 1
    currentletter = ''
    maxVal = ['', 0]
    // Iterate over string
    for(j = 0; j <= s.length; j ++) {
        if(j === 0) currentletter = s[j]
        else if (currentletter === s[j]) currentCount += 1
        else {
            if (currentCount > maxVal[1]) maxVal = [currentletter, currentCount]
            currentletter = s[j]
            currentCount = 1
        }
    }
    return maxVal
  }