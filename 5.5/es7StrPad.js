//eg:
console.log("x".padStart(5, 'sb'));
console.log('x'.padEnd(6, 'sb'));

//padStart()
String.prototype.padStart = function (maxLength, fillString = ' ') {
    let str = String(this);
    if (str.length >= maxLength) {
        return str;
    }
    fillString = String(fillString);
    if (fillString.length === 0) {
        fillString = ' ';
    }

    let fillLen = maxLength - str.length;
    let timesToRepeat = Math.ceil(fillLen / fillString.length);
    let truncatedStringFiller = fillString.repeat(timesToRepeat).slice(0, filllen);
    return truncatedStringFiller + str;
};

//padEnd()
String.prototype.padEnd = function (maxLength, fillString = ' ') {

    let str = String(this);
    if (str.length >= maxLength) {
        return str;
    }
    fillString = String(fillString);
    if (fillString.length === 0) {
        fillString = " ";
    }
    let fillLen = maxLength - str.length;
    let timesToRepeat = Math.ceil(fillLen / fillString.length);
    let truncatedStringFiller = fillString.repeat(timesToRepeat).slice(0, fillLen);
    return str+truncatedStringFiller;
};



