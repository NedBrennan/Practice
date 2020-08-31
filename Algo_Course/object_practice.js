var BigList = {
}

function popObject(str) {
    for (i = 0; i < str.length; i++) {
        if (BigList.hasOwnProperty(str[i])) {
            BigList[str[i]]++
        } else BigList[str[i]] = 1
    }
}

popObject('abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy')

console.log(.2 * 2)