function leftPad(str, maxlen, fillStr) {
    return str.padStart(maxlen, fillStr)
}

console.log(leftPad('foo', 9));


function leftPadFact(str, maxLen, fillStr = ' ') {
    if (arguments.length === 0) return false;
    if (!maxLen && !fillStr || str.length > maxLen || isNaN(maxLen)) return str;
    let filledStr = ' ';
    const filledStrlen = maxLen - str.length;
    for (let i = 0; i < filledStrlen; i++) {
        filledStr += fillStr;
    }
    return filledStr.slice(0, filledStrlen) + str;
}

console.log(leftPadFact("foo",9));