function rot13(message) {
    let result = '';
    for (const char of message) {
        if (/[a-zA-Z]/.test(char)) {
            result += charIndex(char);
        } else {
            result += char;
        }
    }
    return result;
}

function charIndex(char) {
    const arrayCharsLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const arrayCharsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let arrayChars = arrayCharsLower;
    if (char === char.toUpperCase()) {
        arrayChars = arrayCharsUpper;
    }
    const index = arrayChars.findIndex(c => c === char);
    let indexRot = index + 13;
    if (indexRot >= 26) {
        indexRot = indexRot - 26;
    }
    return arrayChars[indexRot];
}

; (() => {
    console.log(rot13("test"));
    console.log(rot13("grfg"),);
    console.log(rot13("hello"));
})()