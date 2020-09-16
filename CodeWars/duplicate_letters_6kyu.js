function dup(s) {

    currS = 0
    newS = []

    for(j = 0; j < s.length; j++) {
        for(k = 0; k < s[j].length; k ++) {
            if(k === 0) {
                newS[j] = s[j][k]
            } else if(s[j][k] !== s[j][currS]) {
                newS[j] += s[j][k]
                if(s[j] === s[j.length - 1]) {
                    s[j] = newS
                    newS[j] = ''
                }
            }
        }
    }

    

  };

  dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"])