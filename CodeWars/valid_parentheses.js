function validParentheses(parens){
    arr = parens
    val = 0

    for (i = 0; i < arr.length; i ++) {
        if (arr[i] === '(') val += 1
        else if (arr[i] === ')') val -= 1

        if (val < 0) return false
    }

    if (val === 0) return true
    else return false
   }