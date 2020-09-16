/* function dup(s) {

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
  */

function dup(s) {

    newarray = s

    function dups(str) {
    newstr = ''
    pointer = 0
    for(i = 0; i < str.length; i ++) {
        if(i === 0) newstr += str[i]
        else if(str[i] === newstr[pointer]) {}
        else {
            newstr += str[i]
            pointer += 1
        }
    }
    return newstr
    }

    for(j = 0; j < s.length; j ++) {
        newarray[j] = dups(newarray[j])
    }

    return newarray
}

function strnum(str) {
    return str[1]
}